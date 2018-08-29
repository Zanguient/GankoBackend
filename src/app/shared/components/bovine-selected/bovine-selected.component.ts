import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SelectedBvnService } from '../../../core/services/selected-bvn.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-bovine-selected',
  templateUrl: './bovine-selected.component.html',
  styleUrls: ['./bovine-selected.component.scss']
})
export class BovineSelectedComponent implements OnInit {

  isGroup: boolean;
  @Input() group: Group;
  @Input() selecteds: string[] = [];
  @Input() editable = false;

  constructor(public service: SelectedBvnService) { }

  ngOnInit() {
    this.isGroup = this.group != null;
    if (this.selecteds != null) {
      console.log('SIZE=>' + this.selecteds.length);
    }


  }

  goToView() {

  }

}
