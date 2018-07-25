import { Component, OnInit } from '@angular/core';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-list-bvn',
  templateUrl: './list-bvn.component.html',
  styleUrls: ['./list-bvn.component.scss']
})
export class ListBvnComponent implements OnInit {

  info: string;

  constructor(nav: NavService) {
    nav.search
      .subscribe(x => this.info = x);

  }

  ngOnInit() {
  }

}
