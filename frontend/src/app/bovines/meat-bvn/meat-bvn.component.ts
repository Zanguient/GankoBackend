import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTable } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, finalize, flatMap, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { from } from '../../../../node_modules/rxjs';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { Bovino } from '../../shared/models/bovine.model';
import { Meat } from '../../shared/models/meat.model';
import { snackError, snackOk } from '../../util/snackbar-util';
import { BovinesService } from '../services/bovines.service';
import { nowFormat } from '../../util/date-util';

@Component({
  selector: 'app-meat-bvn',
  templateUrl: './meat-bvn.component.html',
  styleUrls: ['./meat-bvn.component.scss']
})
export class MeatBvnComponent {

  @ViewChild('tableMeat') table: MatTable<TableMeat>;

  loading = false;
  loadingDes = false;

  columns: string[] = ['fecha', 'peso', 'actions'];
  data: TableMeat[] = [];
  edit = false;

  desteteDate: Date;

  bvn: Bovino;

  constructor(private service: BovinesService, private snack: MatSnackBar, private dialog: MatDialog,
    private router: Router, private route: ActivatedRoute) {

    this.loading = true;
    service.selected('').pipe(
      tap(x => {
        this.bvn = x;
        this.desteteDate = x.fechaDestete ? x.fechaDestete : new Date();
      }),
      mergeMap(x => this.service.listMeat(x.id)),
      mergeMap((x: Meat[]) => from(x).pipe(map((v, i) => new TableMeat(i, v)), toArray())),
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
        flatMap(x => this.service.removeMeat(this.bvn.id, x.item.meat.id)),
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

  saveDes() {
    this.loadingDes = true;
    this.service.updateMeet(this.bvn.id, this.desteteDate).pipe(
      tap(() => this.bvn.fechaDestete = this.desteteDate),
      finalize(() => this.loadingDes = false)
    ).subscribe(() => {
      this.edit = false;
      snackOk(this.snack, 'Fecha actualizada');
    }, err => snackError(this.snack, err));
  }

}

class TableMeat {
  constructor(public i: number,
    public meat: Meat) { }
}
