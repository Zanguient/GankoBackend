import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material';
import { snackError } from '../../../util/snackbar-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    this.loginService
      .login(this.username, this.password)
      .subscribe(data => {
        this.router.navigate(['fincas']);
      },
        () => {
          snackError(this.snackbar, 'Usuario o contraseña incorrectos');
        }
      );
  }

}
