import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export const DIALOG_NOVELTY = 0;
export const DIALOG_DIAGNOSTIC = 1;
export const DIALOG_BIRTH = 2;

@Component({
  selector: 'app-novelty-dialog',
  templateUrl: './novelty-dialog.component.html',
  styleUrls: ['./novelty-dialog.component.scss']
})
export class NoveltyDialogComponent implements OnInit {

  type = DIALOG_DIAGNOSTIC;
  date: string;
  confirm = false;
  novelty = 'Aborto';
  titles = ['Novedad', 'Diagnostico', 'Parto'];
  title: string;

  state = 'Viv';
  sex = 'Macho';


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NoveltyDialogComponent>) { }

  ngOnInit() {
    this.type = this.data.type;
    this.title = this.titles[this.type];
  }

  accept() {
    this.dialogRef.close({
      type: this.type, date: new Date(this.date), confirmed: this.confirm, novelty: this.novelty,
      state: this.state + (this.sex === 'Macho' ? 'o' : 'a'), sex: this.sex
    });
  }

}
