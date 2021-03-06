import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { BovinesService, ItemEmp } from '../../services/bovines.service';
import { tap, filter, map, mergeMap } from 'rxjs/operators';
import { snackError } from '../../../util/snackbar-util';

@Component({
  selector: 'app-empadre-dialog',
  templateUrl: './empadre-dialog.component.html',
  styleUrls: ['./empadre-dialog.component.scss']
})
export class EmpadreDialogComponent implements OnInit, OnDestroy {

  textChange: Subject<string> = new Subject();
  items: ItemEmp[] = [];

  query = '';
  loading = false;
  type: string;

  subs: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EmpadreDialogComponent>,
    private snack: MatSnackBar, private service: BovinesService) { }

  ngOnInit() {

    this.type = this.data.type;

    this.subs = this.textChange.pipe(
      tap(x => {
        this.query = x;
        this.loading = true;
        if (x === '') {
          this.loading = false;
          this.items = [];
        }
      }),
      filter(x => x !== ''),
      map(x => encodeURI(x)),
      mergeMap(x => this.service.listEmp(x, this.type))
    ).subscribe(x => {
      this.items = x;
      this.loading = false;
    }, err => {
      snackError(this.snack, err);
      this.loading = false;
    });

  }

  ngOnDestroy() {
    this.textChange.complete();
    this.subs.unsubscribe();
  }

  select(index: number) {
    this.dialogRef.close({ type: this.type, item: this.items[index] });
  }


}

