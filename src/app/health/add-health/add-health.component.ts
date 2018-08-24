import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sanidad, TYPE_SANIDAD } from '../../shared/models/health.model';
import { MatSnackBar } from '@angular/material';
import { HealthService } from '../services/health.service';
import { finalize } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
  styleUrls: ['./add-health.component.scss']
})
export class AddHealthComponent implements OnInit {

  loading = false;
  date: Date;

  item: Sanidad = {
    evento: '',
    otra: '',
    diagnostico: '',
    tratamiento: '',
    producto: '',
    dosis: '',
    frecuencia: 0,
    unidadFrecuencia: '',
    valorProducto: 0,
    valorAtencion: 0,
    numeroAplicaciones: 0,
    observaciones: '',
    aplicacion: 1,
    bovinos: [],
    noBovinos: [],
    type: TYPE_SANIDAD
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: HealthService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    if (this.date) {
      this.item.fecha = new Date(this.date);
      this.item.fechaProxima = this.fechaProx(this.date, this.item.numeroAplicaciones, this.item.frecuencia)
    }
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Sanidad Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));
  }

  fechaProx(fecha: Date, aplicaciones: number, frecuencia: number): Date {
    if (aplicaciones > 1) {
      switch (this.item.unidadFrecuencia) {
        case "Horas":
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000));
        case "Dias":
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000 * 24));
        case "Meses":
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000 * 24 * 30));
        case "Años":
          return new Date(fecha.getTime() + (frecuencia * 3600 * 1000 * 24 * 30 * 12));
      }
    } else {
      null
    }

  }

}
