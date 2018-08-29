import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-milk',
  template: '<router-outlet></router-outlet>'
})
export class MilkComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Leche';
  }

  ngOnInit() {
  }

}
