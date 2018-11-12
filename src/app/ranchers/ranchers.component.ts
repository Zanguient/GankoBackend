import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-ranchers',
  template: '<router-outlet></router-outlet>'
})
export class RanchersComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Ganaderos';
  }

  ngOnInit() {
  }

}
