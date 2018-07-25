import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-reports',
  template: `
    <p>
      reports works!
    </p>
  `,
  styles: []
})
export class ReportsComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Reportes';
  }

  ngOnInit() {
  }

}
