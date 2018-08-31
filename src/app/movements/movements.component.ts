import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-movements',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class MovementsComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Movimientos';
  }

  ngOnInit() {
  }

}
