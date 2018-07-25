import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';

@Component({
  selector: 'app-feed',
  template: '<router-outlet></router-outlet>'
})
export class FeedComponent implements OnInit {

  constructor(nav: NavService) {
    nav.title = 'Alimentación';
  }

  ngOnInit() {
  }

}
