import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService
      .login(this.username, this.password)
      .subscribe(data => {
        this.router.navigate(['fincas']);
      },
      err => {
        alert(err);
      }
      )
  }

}
