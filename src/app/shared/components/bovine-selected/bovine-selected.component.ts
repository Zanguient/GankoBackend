import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bovino } from '../../models/bovine.model';

@Component({
  selector: 'app-bovine-selected',
  templateUrl: './bovine-selected.component.html',
  styleUrls: ['./bovine-selected.component.scss']
})
export class BovineSelectedComponent implements OnInit {

  data: Bovino[] = [];
  removeBvn: EventEmitter<Bovino> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addBovine(bvn: Bovino) {
    this.data.push(bvn);
  }

  removeBovine(bvn: Bovino) {
    const index = this.data.indexOf(bvn);
    this.data.splice(index, 1);
  }

}
