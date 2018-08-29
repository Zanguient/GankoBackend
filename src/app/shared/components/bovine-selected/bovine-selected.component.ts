import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectedBvnService } from '../../../core/services/selected-bvn.service';

@Component({
  selector: 'app-bovine-selected',
  templateUrl: './bovine-selected.component.html',
  styleUrls: ['./bovine-selected.component.scss']
})
export class BovineSelectedComponent implements OnInit {

  group: boolean;

  constructor(public service: SelectedBvnService) { }

  ngOnInit() {

    this.group = this.service.group != null;
  }

  goToView() {
  }

}
