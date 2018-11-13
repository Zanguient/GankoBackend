import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../../shared/models/vaccine.model';
import { VaccinesService } from '../services/vaccines.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';
import { finalize } from 'rxjs/operators';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';

@Component({
  selector: 'app-re-apply-vaccines',
  templateUrl: './re-apply-vaccines.component.html',
  styleUrls: ['./re-apply-vaccines.component.scss']
})
export class ReApplyVaccinesComponent implements OnInit {

  item: Vacuna;
  loading = false;
  reApp1: boolean;

  constructor(private service: VaccinesService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute,
    public selecteds: SelectedBvnService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(x => x.get('id')),
      mergeMap(x => this.service.selected(x)),
      tap(x => this.selecteds.selecteds = x.bovinos)
    ).subscribe(x => this.item = x, err => snackError(this.snack, err));
  }

  goToEditSelected() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  goToBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  apply() {
    this.item.fecha = this.item.fechaProxima;
    this.item.fechaProxima = this.fechaProx(this.item.fechaProxima, this.item.frecuencia);
    this.loading = true;
    this.item.bovinos = this.selecteds.selecteds;
    this.item.noBovinos = this.selecteds.removeds;
    this.service.add(this.item).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe(() => {
      snackOk(this.snack, 'Aplicacion de vacuna Agregada');
      this.router.navigate(['../../'], { relativeTo: this.route });
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
