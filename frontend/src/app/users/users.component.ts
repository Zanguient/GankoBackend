import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-users',
  template: '<router-outlet></router-outlet>'
})
export class UsersComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Usuarios';
  }

  ngOnInit() {
  }

}
