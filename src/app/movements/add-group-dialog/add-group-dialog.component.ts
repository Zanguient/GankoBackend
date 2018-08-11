import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupsService } from '../../groups/service/groups.service';
import { Group } from '../../shared/models/group.model';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: []
})
export class AddGroupDialogComponent {

  options: Group[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddGroupDialogComponent>,
    private serviceGroup: GroupsService) {
    serviceGroup.list().subscribe(x => this.options = x);
  }

  accept() {
    this.dialogRef.close(this.data);
  }
}
