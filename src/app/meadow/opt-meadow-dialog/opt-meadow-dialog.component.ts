import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-opt-meadow-dialog',
  templateUrl: './opt-meadow-dialog.component.html',
  styleUrls: ['./opt-meadow-dialog.component.scss']
})
export class OptMeadowDialogComponent {

  constructor(public dialogRef: MatDialogRef<OptMeadowDialogComponent>) { }

  admin() {
    this.dialogRef.close(0);
  }

  alert() {
    this.dialogRef.close(1);
  }

}
