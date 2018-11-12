import { Component, OnInit } from '@angular/core';
import { ROL_RANCHER, TYPE_USUARIO, User, PLANS, ROL_ASSISTANT, ROL_ADMIN } from 'src/app/shared/models/user.model';
import { RanchersService } from '../services/ranchers.service';
import { SessionService } from 'src/app/core/services/session.service';
import { MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { snackOk, snackError } from 'src/app/util/snackbar-util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-rancher',
  templateUrl: './add-rancher.component.html',
  styleUrls: ['./add-rancher.component.scss']
})
export class AddRancherComponent {

  item: User = {
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    dni: '',
    estado: 'activo',
    pass: '',
    rol: ROL_RANCHER,
    type: TYPE_USUARIO,
    plan: PLANS[0].name
  };

  rol = ROL_ASSISTANT;
  rolAdmin = ROL_ADMIN;
  plans = PLANS;

  loading = false;
  edit = false;
  id: string;

  editPlan = false;
  editPass = false;

  loadingSelected = false;

  constructor(private service: RanchersService, private session: SessionService, private snack: MatSnackBar,
    private router: Router, private route: ActivatedRoute) {
    this.rol = this.session.role;
    this.id = this.route.snapshot.params['id'];
    this.edit = this.id ? true : false;

    if (this.edit) {
      this.loadingSelected = true;
      this.service.selected(this.id).pipe(
        finalize(() => this.loadingSelected = false)
      ).subscribe(x => {
        this.item = JSON.parse(JSON.stringify(x));
        this.item.pass = '';
      }, err => snackError(this.snack, 'Error al cargar ganadero'));
    }

  }

  add() {
    this.loading = true;

    if (this.edit) {
      if (!this.editPass) {
        delete this.item.pass;
      }

      if (!this.editPlan) {
        delete this.item.plan;
      }
    }

    (this.edit ? this.service.update(this.item) : this.service.add(this.item)).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, this.edit ? 'Ganadero actualizado' : 'Ganadero registrado');
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  goToBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
