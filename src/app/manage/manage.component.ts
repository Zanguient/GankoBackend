import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-manage',
  template: '<router-outlet></router-outlet>'
})
export class ManageComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Manejo';
  }

  ngOnInit() {
  }

}
