import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-health',
  template: '<router-outlet></router-outlet>'
})
export class HealthComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Sanidad';
  }

  ngOnInit() {
  }

}
