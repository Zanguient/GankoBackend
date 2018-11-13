import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { HealthService } from '../services/health.service';
import { Sanidad } from '../../shared/models/health.model';
import { map, mergeMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { snackError, snackOk } from '../../util/snackbar-util';
import { finalize } from 'rxjs/operators';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';

@Component({
  selector: 'app-re-apply-health',
  templateUrl: './re-apply-health.component.html',
  styleUrls: ['./re-apply-health.component.scss']
})
export class ReApplyHealthComponent implements OnInit {

  prev: Sanidad;

  item: Sanidad;
  loading = false;

  constructor(private route: ActivatedRoute, private service: HealthService, private snack: MatSnackBar, private router: Router,
    public selecteds: SelectedBvnService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(x => x.get('id')),
      mergeMap(x => this.service.selected(x)),
      tap(x => this.selecteds.selecteds = x.bovinos)
    ).subscribe(x => {
      this.prev = x;
      this.item = JSON.parse(JSON.stringify(x));
      this.item.fecha = new Date(this.item.fecha);
      this.item.fechaProxima = new Date(this.item.fechaProxima);
    }, err => snackError(this.snack, err));
  }

  goToBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  goToEditSelected() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  apply() {
    this.item.aplicacion = this.item.aplicacion + 1;

    this.item.idAplicacionUno = this.item.idAplicacionUno ? this.item.idAplicacionUno : this.item.id;
    this.item.fechaProxima = new Date(this.item.fechaProxima);
    this.item.fecha = this.item.fechaProxima;
    this.item.fechaProxima = this.fechaProx(this.item.fechaProxima, this.item.aplicacion,
      this.item.numeroAplicaciones, this.item.frecuencia);
    this.loading = true;

    this.item.bovinos = this.selecteds.selecteds;
    this.item.noBovinos = this.selecteds.removeds;

    this.prev.estadoProximo = 1;

    this.service.add(this.item).pipe(
      mergeMap(() => this.service.update(this.prev)),
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Aplicacion de sanidad Agregada');
      this.router.navigate(['../../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));
  }

  fechaProx(fecha: Date, aplicaciones: number, numeroAppTotal: number, frecuencia: number): Date {
    if (aplicaciones < numeroAppTotal) {
      switch (this.item.unidadFrecuencia) {
        case 'Horas':
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000));
        case 'Dias':
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000 * 24));
        case 'Meses':
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000 * 24 * 30));
        case 'Años':
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000 * 24 * 30 * 12));
      }
    } else {
      return null;
    }

  }


}
