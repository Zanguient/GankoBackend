import { Component, OnInit } from '@angular/core';
import { BovinesService } from '../services/bovines.service';
import { Bovino } from '../../shared/models/bovine.model';

@Component({
  selector: 'app-info-bvn',
  templateUrl: './info-bvn.component.html',
  styleUrls: ['./info-bvn.component.scss']
})
export class InfoBvnComponent implements OnInit {

  item: Bovino;

  constructor(service: BovinesService) {
    service.selected('')
      .subscribe(x => this.item = x);
  }

  ngOnInit() {
  }

}
