import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material';
import { snackError } from '../../../util/snackbar-util';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  loading = false;

  constructor(private router: Router, private loginService: LoginService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.username, this.password).pipe(
      finalize(() => this.loading = false)
    ).subscribe(data => {
      this.router.navigate(['fincas']);
    },
      () => {
        snackError(this.snackbar, 'Usuario o contraseña incorrectos');
      }
    );
  }

}
