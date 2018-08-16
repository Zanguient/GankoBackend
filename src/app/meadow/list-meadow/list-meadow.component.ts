import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Pradera } from '../../shared/models/meadow.model';
import { MeadowService } from '../services/meadow.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { snackError, snackOk } from '../../util/snackbar-util';
import { AddMeadowDialogComponent } from '../add-meadow-dialog/add-meadow-dialog.component';
import { OptMeadowDialogComponent } from '../opt-meadow-dialog/opt-meadow-dialog.component';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { filter, flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-list-meadow',
  templateUrl: './list-meadow.component.html',
  styleUrls: ['./list-meadow.component.scss']
})
export class ListMeadowComponent extends BaseListComponent<Pradera> {

  // gridList: Cell[] = [];
  praderas: Pradera[] = [];

  constructor(service: MeadowService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, private d: MatDialog, private snackB: MatSnackBar, private serv: MeadowService) {
    super(service, dialog, router, route, snack);
    this.loadPraderas();
  }

  loadPraderas() {
    this.loading = true;
    /*for (let i = 0; i < 100; i++) {
      this.gridList.push(new Cell(i, new Pradera(false)));
    }*/
    this.service.list().subscribe(x => {
      this.praderas = x;
    }, err => snackError(this.snackB, err));
    this.loading = false;
  }

  openDialog(pradera: Pradera, index?: number) {
    if (!pradera.isUsedMeadow) {
      const dialogRef = this.d.open(AddMeadowDialogComponent, {
        data: { item: pradera },
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(rsp => {
        if (rsp) {
          pradera.tamanoEnHectareas = rsp.tamanoEnHectareas;
          pradera.tamano = rsp.tamano;
          pradera.isUsedMeadow = true;
          pradera.isEmptyMeadow = false;
          pradera.available = true;
          pradera.fechaSalida = new Date();
          pradera.id = pradera.identificador.toString();
          pradera.mantenimiento = [];
          pradera.aforo = [];
          this.service.update(pradera).subscribe(() => snackOk(this.snackB, 'Se guardo correctamente'),
            err => snackError(this.snackB, err));
        }
      }, err => snackError(this.snackB, err));
    } else {
      this.serv.selectedTab = 0;
      const dialogRef = this.d.open(OptMeadowDialogComponent, {
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(rsp => {
        this.service.select(pradera);
        if (rsp === 0) {
          this.goToAdmin(pradera.identificador);
        } else if (rsp === 1) {
          this.goToAlert(pradera.identificador);
        } else if (rsp === 2) {
          this.removePradera(pradera, index);
        }
      }, err => snackError(this.snackB, err));
    }

  }

  removePradera(data: Pradera, index: number) {
    const dialogRef = this.d.open(DeleteDialogComponent, {
      data: { item: data },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(x => {
      this.updateRemoveData(x.item);
    });
  }

  updateRemoveData(data: Pradera) {
    if (!data.available) {
      snackOk(this.snackB, 'La pardera tiene un grupo asociado');
    } else {
      data.isUsedMeadow = false;
      data.available = true;
      this.service.update(data).subscribe(rsp => {
        snackOk(this.snackB, 'Se removio la pradera');
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
