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
    router: Router, route: ActivatedRoute, private d: MatDialog, private snackB: MatSnackBar, private serv: MeadowService) {
    super(service, dialog, router, route, snack);
    this.loading = true;
    for (let i = 0; i < 100; i++) {
      this.gridList.push(new Cell(i, new Pradera(false)));
    }
    service.list().subscribe(x => {
      for (const pradera of x) {
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
          console.log(Object.values(rsp));
          cell.pradera.tamanoEnHectareas = rsp.tamanoEnHectareas;
          cell.pradera.tamano = rsp.tamano  ;
          cell.pradera.isUsedMeadow = true;
          cell.pradera.isEmptyMeadow = false;
          cell.pradera.available = true;
          cell.pradera.fechaSalida = new Date();
          cell.pradera.identificador = this.data.length + 1;
          cell.pradera.id = cell.pradera.identificador.toString();
          cell.pradera.sequence = 12;
          cell.pradera.type = 'tipo';
          cell.pradera.cellId = cell.cellId;
          this.service.add(cell.pradera).subscribe(() => snackOk(this.snackB, 'Se guardo correctamente'),
            err => snackError(this.snackB, err));
        }
      }, err => snackError(this.snackB, err));
    } else {
      this.serv.selectedTab = 0;
      const dialogRef = this.d.open(OptMeadowDialogComponent, {
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(rsp => {
        this.service.select(cell.pradera);
        if (rsp === 0) {
          this.goToAdmin(cell.pradera.identificador);
        } else if (rsp === 1) {
          this.goToAlert(cell.pradera.identificador);
        }
      }, err => snackError(this.snackB, err));
    }

  }

  goToAdmin(index: number) {
    this.router.navigate([index], { relativeTo: this.route });
  }

  goToAlert(index: number) {
    this.router.navigate([index + '/alertas'], { relativeTo: this.route });
  }



}
