import { Component, OnInit } from '@angular/core';
import { Bovino, Servicio } from '../../../../shared/models/bovine.model';
import { BovinesService } from '../../../services/bovines.service';
import { tap, mergeMap, filter, toArray } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-service-bvn',
  templateUrl: './service-bvn.component.html',
  styleUrls: ['./service-bvn.component.scss']
})
export class ServiceBvnComponent implements OnInit {

  bvn: Bovino;
  data: Servicio[];

  constructor(service: BovinesService) {
    service.selected('').pipe(
      tap(x => this.bvn = x),
      mergeMap(x => from(x.servicios ? x.servicios : [])),
      filter(x => x.finalizado),
      toArray()
    ).subscribe(x => this.data = x);
  }

  ngOnInit() {
  }

}
