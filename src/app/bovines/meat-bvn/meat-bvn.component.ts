import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTable } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, finalize, flatMap, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { from } from '../../../../node_modules/rxjs';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { Bovino } from '../../shared/models/bovine.model';
import { Meet } from '../../shared/models/meet.model';
import { snackError, snackOk } from '../../util/snackbar-util';
import { BovinesService } from '../services/bovines.service';

@Component({
  selector: 'app-meat-bvn',
  templateUrl: './meat-bvn.component.html',
  styleUrls: ['./meat-bvn.component.scss']
})
export class MeatBvnComponent {

  @ViewChild('tableMeet') table: MatTable<TableMeet>;

  loading = false;
  columns: string[] = ['fecha', 'peso', 'actions'];
  data: TableMeet[] = [];

  bvn: Bovino;

  constructor(private service: BovinesService, private snack: MatSnackBar, private dialog: MatDialog,
    private router: Router, private route: ActivatedRoute) {

    this.loading = true;
    service.selected('').pipe(
      tap(x => this.bvn = x),
      mergeMap(x => this.service.listMeet(x.id)),
      mergeMap((x: Meet[]) => from(x).pipe(map((v, i) => new TableMeet(i, v)), toArray())),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));
  }


  removeItem(index: number) {
    this.dialog.open(DeleteDialogComponent, {
      data: { item: this.data[index] },
      autoFocus: false
    })
      .afterClosed()
      .pipe(
        filter(x => x !== undefined),
        flatMap(x => this.service.removeMeet(x.item.meet.id)),
        tap(() => {
          this.data.splice(index, 1);
          this.table.renderRows();
        })
      )
      .subscribe(() => snackOk(this.snack, 'Registro Eliminado'), err => snackError(this.snack, err));
  }

  goToAdd() {
    this.router.navigate(['agregar'], { relativeTo: this.route });
  }

}

class TableMeet {
  constructor(public i: number,
    public meet: Meet) { }
}
