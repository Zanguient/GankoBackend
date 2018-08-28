import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.scss']
})
export class ClearDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ClearDialogComponent>) { }

  ngOnInit() {
  }

  accept() {
    this.dialogRef.close({ status: true });
  }

}
