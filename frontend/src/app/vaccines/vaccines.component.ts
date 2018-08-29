import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-vaccines',
  template: '<router-outlet></router-outlet>'
})
export class VaccinesComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Vacunas';
  }

  ngOnInit() {
  }

}
