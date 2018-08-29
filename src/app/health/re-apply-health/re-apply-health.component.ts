import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { HealthService } from '../services/health.service';
import { Sanidad } from '../../shared/models/health.model';
import { map, mergeMap } from 'rxjs/operators';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { snackError, snackOk } from '../../util/snackbar-util';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-re-apply-health',
  templateUrl: './re-apply-health.component.html',
  styleUrls: ['./re-apply-health.component.scss']
})
export class ReApplyHealthComponent implements OnInit {

  item:Sanidad;
  date: Date;
  loading = false;

  constructor(private route:ActivatedRoute, private service:HealthService, private snack:MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(x=> x.get('id')),
      mergeMap(x=> this.service.selected(x))
    ).subscribe(x => this.item = x , err=> snackError(this.snack, err));
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  apply() {
    this.item.aplicacion = this.item.aplicacion + 1;
    if (this.date) {
      this.item.fecha = new Date(this.date);
      this.item.fechaProxima = this.fechaProx(this.date, this.item.aplicacion, this.item.numeroAplicaciones, this.item.frecuencia)
    }
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Aplicacion de sanidad Agregada');
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
