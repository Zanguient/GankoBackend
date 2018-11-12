import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ROL_ADMIN, ROL_ASSISTANT, TYPE_USUARIO, User } from 'src/app/shared/models/user.model';
import { snackOk } from 'src/app/util/snackbar-util';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  item: User = {
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    dni: '',
    estado: 'activo',
    pass: '',
    rol: ROL_ASSISTANT,
    type: TYPE_USUARIO
  };
  loading = false;

  rolAdmin = ROL_ADMIN;
  rolAssistant = ROL_ASSISTANT;

  constructor(private service: UsersService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

  add() {
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Usuario registrado');
      this.router.navigate(['../']);
    });
  }

  goToBack() {
    this.router.navigate(['../']);
  }

}
