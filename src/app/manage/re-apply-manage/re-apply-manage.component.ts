import { Component, OnInit } from '@angular/core';
import { Manejo } from '../../shared/models/manage.model';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ManageService } from '../services/manage.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { map, mergeMap, tap } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';
import { finalize } from 'rxjs/operators';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';

@Component({
  selector: 'app-re-apply-manage',
  templateUrl: './re-apply-manage.component.html',
  styleUrls: ['./re-apply-manage.component.scss']
})
export class ReApplyManageComponent implements OnInit {

  item: Manejo;
  loading = false;

  constructor(private route: ActivatedRoute, private service: ManageService, private snack: MatSnackBar, private router: Router,
    public selecteds: SelectedBvnService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(x => x.get('id')),
      mergeMap(x => this.service.selected(x)),
      tap(x => this.selecteds.selecteds = x.bovinos)
    ).subscribe(x => this.item = x, err => snackError(this.snack, err));
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  goToEditSelected() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  apply() {
    this.item.aplicacion = this.item.aplicacion + 1;
    this.item.fechaProxima = this.fechaProx(this.item.fechaProxima, this.item.aplicacion,
      this.item.numeroAplicaciones, this.item.frecuencia);

    this.loading = true;

    this.item.bovinos = this.selecteds.selecteds;
    this.item.noBovinos = this.selecteds.removeds;

    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Aplicacion de manejo Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
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
