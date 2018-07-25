import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-farms',
  template: `
  <mat-toolbar color="primary">
    <span class="container">Fincas</span>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
})
export class FarmsComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Fincas';
  }

  ngOnInit() {
  }

}
