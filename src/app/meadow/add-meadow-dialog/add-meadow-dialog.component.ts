import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';
import { Pradera } from '../../shared/models/meadow.model';

@Component({
  selector: 'app-add-meadow-dialog',
  templateUrl: './add-meadow-dialog.component.html',
  styleUrls: ['./add-meadow-dialog.component.scss']
})
export class AddMeadowDialogComponent {

  dataP: Pradera = new Pradera();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddMeadowDialogComponent>) {
  }

  accept() {
    this.data.tamano = this.dataP.tamano;
    this.data.tamanoEnHectareas = this.dataP.tamanoEnHectareas;
    this.dialogRef.close(this.data);
  }

}
