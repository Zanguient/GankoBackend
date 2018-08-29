import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-bovines',
  template: '<router-outlet></router-outlet>'
})
export class BovinesComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Bovinos';
    nav.searchable = true;
    nav.filterable = true;
  }

  ngOnInit() {
  }

}
