import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-group-dialog',
  templateUrl: './remove-group-dialog.component.html',
  styleUrls: ['./remove-group-dialog.component.scss']
})
export class RemoveGroupDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<RemoveGroupDialogComponent>) {
  }

  accept() {
    this.dialogRef.close(this.data);
  }

}
