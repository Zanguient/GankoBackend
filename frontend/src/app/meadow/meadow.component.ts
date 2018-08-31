import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-meadow',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class MeadowComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Praderas';
  }

  ngOnInit() {
  }

}
