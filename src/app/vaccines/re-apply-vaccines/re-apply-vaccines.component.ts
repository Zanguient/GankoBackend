import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../../shared/models/vaccine.model';
import { VaccinesService } from '../services/vaccines.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-re-apply-vaccines',
  templateUrl: './re-apply-vaccines.component.html',
  styleUrls: ['./re-apply-vaccines.component.scss']
})
export class ReApplyVaccinesComponent implements OnInit {

  item: Vacuna;
  date: Date;
  loading = false;

  constructor(private service: VaccinesService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(x=> x.get('id')),
      mergeMap(x=> this.service.selected(x))
    ).subscribe(x => this.item = x , err=> snackError(this.snack, err));
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    if (this.date) {
      this.item.fecha = new Date(this.date);
      this.item.fechaProxima = this.fechaProx(this.date, this.item.frecuencia);
    }
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe(() => {
      snackOk(this.snack, 'Aplicacion de vacuna Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));

  }

  fechaProx(fecha: Date, frecuencia: number): Date {
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
  }


}
