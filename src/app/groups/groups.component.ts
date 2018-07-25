import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-groups',
  template: '<router-outlet></router-outlet>'
})
export class GroupsComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Grupos';
  }

  ngOnInit() {
  }

}
