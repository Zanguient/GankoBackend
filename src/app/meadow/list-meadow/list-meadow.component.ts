import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Pradera, Cell } from '../../shared/models/meadow.model';
import { MeadowService } from '../services/meadow.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { snackError, snackOk } from '../../util/snackbar-util';
import { AddMeadowDialogComponent } from '../add-meadow-dialog/add-meadow-dialog.component';
import { OptMeadowDialogComponent } from '../opt-meadow-dialog/opt-meadow-dialog.component';

@Component({
  selector: 'app-list-meadow',
  templateUrl: './list-meadow.component.html',
  styleUrls: ['./list-meadow.component.scss']
})
export class ListMeadowComponent extends BaseListComponent<Pradera> {

  gridList: Cell[] = [];

  constructor(service: MeadowService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, private d: MatDialog, private snackB: MatSnackBar) {
    super(service, dialog, router, route, snack);
    this.loading = true;
    for (let i = 0; i < 100; i++) {
      this.gridList.push(new Cell(i, new Pradera(false)));
    }
    service.list().subscribe(x => {
      for (const pradera of x) {
        pradera.isUsedMeadow = true;
        this.gridList[pradera.cellId].pradera = pradera;
      }
    }, err => snackError(snack, err));
    this.loading = false;
  }

  openDialog(cell: Cell) {
    if (!cell.pradera.isUsedMeadow) {
      const dialogRef = this.d.open(AddMeadowDialogComponent, {
        data: { item: cell.pradera },
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(rsp => {
        if (rsp) {
          cell.pradera.tamanoEnHectareas = rsp[2];
          cell.pradera.tamano = rsp[1];
          cell.pradera.isUsedMeadow = true;
          cell.pradera.isEmptyMeadow = false;
          cell.pradera.available = true;
          cell.pradera.fechaSalida = new Date();
          cell.pradera.identificador = this.data.length + 1;
          this.service.add(cell.pradera).subscribe(() => snackOk(this.snackB, 'Se guardo correctamente'),
            err => snackError(this.snackB, err));
        }
      }, err => snackError(this.snackB, err));
    } else {
      const dialogRef = this.d.open(OptMeadowDialogComponent, {
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(rsp => {
        this.service.select(this.data[cell.cellId]);
        if (rsp === 0) {
          this.goToAdmin(cell.cellId);
        } else if (rsp === 1) {
          this.goToAlert(cell.cellId);
        }
      }, err => snackError(this.snackB, err));
    }

  }

  goToAdmin(index: number) {
    this.router.navigate([(this.data[index] as any).id], { relativeTo: this.route });
  }

  goToAlert(index: number) {
    this.router.navigate([(this.data[index] as any).id + '/alertas'], { relativeTo: this.route });
  }



}
