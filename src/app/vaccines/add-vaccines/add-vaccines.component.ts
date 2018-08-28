import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacuna, TYPE_VACUNA } from '../../shared/models/vaccine.model';
import { MatSnackBar } from '@angular/material';
import { VaccinesService } from '../services/vaccines.service';
import { finalize } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';

@Component({
  selector: 'app-add-vaccines',
  templateUrl: './add-vaccines.component.html',
  styleUrls: ['./add-vaccines.component.scss']
})
export class AddVaccinesComponent implements OnInit {

  loading = false;
  date: Date;
  dosis: number;
  other: string;

  item: Vacuna = {
    nombre: '',
    unidadFrecuencia:'',
    frecuencia: 0,
    valor: 0,
    bovinos: [],
    noBovinos: [],
    type: TYPE_VACUNA
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: VaccinesService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    if (this.date) {
      this.item.fecha = new Date(this.date);
      this.item.fechaProxima = this.fechaProx(this.date, this.item.frecuencia)
    }
    if(this.other != ""){
      this.item.dosisMl = parseInt(this.other)
    }
    else{
      this.item.dosisMl = this.dosis
    }
    
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Vacuna Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));

  }

  fechaProx(fecha: Date, frecuencia: number): Date {
    
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
  }

}
