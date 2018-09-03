import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SelectedBvnService } from '../../../core/services/selected-bvn.service';
import { Group } from '../../models/group.model';
import { Grupo } from '../../models/common.model';

@Component({
  selector: 'app-bovine-selected',
  templateUrl: './bovine-selected.component.html',
  styleUrls: ['./bovine-selected.component.scss']
})
export class BovineSelectedComponent implements OnInit {

  type = 0;
  @Input() group: Group;
  @Input() groupReg: Grupo;
  @Input() selecteds: string[] = [];
  @Input() editable = false;
  @Output() clickView: EventEmitter<number> = new EventEmitter();

  constructor(public service: SelectedBvnService) { }

  ngOnInit() {
    if (this.group != null) { this.type = 1; }
    if (this.groupReg != null) { this.type = 2; }
  }

  goToView() {
    this.service.editable = this.editable;
    this.clickView.emit(0);
  }

}
