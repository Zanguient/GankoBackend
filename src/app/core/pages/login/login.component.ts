import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material';
import { snackError } from '../../../util/snackbar-util';
import { finalize } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { ROL_ADMIN, ROL_ASSISTANT } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  loading = false;

  constructor(private router: Router, private loginService: LoginService,
    private snackbar: MatSnackBar, private session: SessionService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.username, this.password).pipe(
      finalize(() => this.loading = false)
    ).subscribe(data => {
      const role = this.session.role;
      if (role === ROL_ADMIN || role === ROL_ASSISTANT) {
        this.router.navigate(['dashboard', 'ganaderos']);
      } else {
        this.router.navigate(['fincas']);
      }

    },
      () => {
        snackError(this.snackbar, 'Usuario o contraseña incorrectos');
      }
    );
  }

}
