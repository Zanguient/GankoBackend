import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-straw',
  template: '<router-outlet></router-outlet>'
})
export class StrawComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Pajillas';
  }

  ngOnInit() {
  }

}
