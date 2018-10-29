import { Component, OnInit } from '@angular/core';
import { BovinesService } from '../services/bovines.service';
import { Bovino } from '../../shared/models/bovine.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-bvn',
  templateUrl: './info-bvn.component.html',
  styleUrls: ['./info-bvn.component.scss']
})
export class InfoBvnComponent implements OnInit {

  item: Bovino;

  url = environment.urlBase + '/imagen/';

  constructor(public service: BovinesService) {
    service.selected('')
      .subscribe(x => this.item = x);
  }

  ngOnInit() {
  }

}
