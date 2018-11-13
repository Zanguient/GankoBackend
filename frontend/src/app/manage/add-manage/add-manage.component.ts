import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manejo, TYPE_MANEJO } from '../../shared/models/manage.model';
import { MatSnackBar } from '@angular/material';
import { ManageService } from '../services/manage.service';
import { finalize } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';

@Component({
  selector: 'app-add-manage',
  templateUrl: './add-manage.component.html',
  styleUrls: ['./add-manage.component.scss']
})
export class AddManageComponent implements OnInit {

  loading = false;
  date: Date;

  item: Manejo = {
    titulo: '',
    otro: '',
    tratamiento: '',
    numeroAplicaciones: 0,
    producto: '',
    frecuencia: 0,
    unidadFrecuencia: '',
    valorProducto: 0,
    observaciones: '',
    valorAsistencia: 0,
    aplicacion: 1,
    bovinos: [],
    noBovinos: [],
    estadoProximo: 0,
    type: TYPE_MANEJO
  };

  constructor(private router: Router, private route: ActivatedRoute, private snack: MatSnackBar, private service: ManageService,
    public selected: SelectedBvnService) { }

  ngOnInit() {

  }

  goToBack() {
    this.selected.clear();
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  goToEditSelected() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  add() {
    if (this.date) {
      this.item.fecha = new Date(this.date);
      this.item.fechaProxima = this.fechaProx(this.item.fecha, this.item.numeroAplicaciones, this.item.frecuencia);
    }
    this.loading = true;

    if (this.selected.group) {
      const gr = this.selected.group;
      this.item.grupo = { color: gr.color, id: gr.id, nombre: gr.nombre };
      this.item.bovinos = this.selected.group.bovines;
    } else {
      this.item.bovinos = this.selected.selecteds;
    }

    this.item.tipo = this.item.titulo;

    this.service.add(this.item).pipe(
      finalize(() => {
        this.loading = false;
        this.selected.clear();
      })
    ).subscribe(() => {
      snackOk(this.snack, 'Manejo Agregado');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));

  }

  fechaProx(fecha: Date, aplicaciones: number, frecuencia: number): Date {
    if (aplicaciones > 1) {
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
