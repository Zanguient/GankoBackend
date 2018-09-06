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
  idArray: boolean[] = [];

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
      this.addIdArray();
    }, err => snackError(this.snackB, err));
    this.loading = false;
  }

  addIdArray() {
    this.idArray = [];
    for (let i = 0; i < 100; i++) {
      this.idArray.push(false);
    }
    for (let i = 0; i < this.praderas.length; i++) {
      if (this.praderas[i].identificador !== undefined) {
        this.idArray[this.praderas[i].identificador - 1] = true;
      }
    }
  }

  openDialog(pradera: Pradera, index?: number) {
    if (!pradera.isUsedMeadow) {
      const dialogRef = this.d.open(AddMeadowDialogComponent, {
        data: { item: pradera },
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(rsp => {
        if (rsp) {
          const praderaOld: Pradera = pradera;
          pradera.tamanoEnHectareas = rsp.tamanoEnHectareas;
          pradera.tamano = rsp.tamano;
          pradera.isUsedMeadow = !pradera.isUsedMeadow;
          pradera.isEmptyMeadow = !pradera.isEmptyMeadow;
          pradera.available = true;
          pradera.fechaSalida = new Date();
          pradera.identificador = this.getIdentificador();
          pradera.mantenimiento = [];
          pradera.aforo = [];
          this.service.update(pradera).subscribe(() => snackOk(this.snackB, 'Se guardo correctamente'),
            err => {
              snackError(this.snackB, err);
              this.loadPraderas();
            });
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
          this.goToAdmin(pradera.id);
        } else if (rsp === 1) {
          this.goToAlert(pradera.id);
        } else if (rsp === 2) {
          this.removePradera(pradera, index);
        }
      }, err => snackError(this.snackB, err));
    }

  }

  getIdentificador() {
    let identificador = 0;
    for (let i = 0; i < this.idArray.length; i++) {
      if (!this.idArray[i]) {
        identificador = i + 1;
        this.idArray[i] = true;
        break;
      }
    }
    return identificador;
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
    if (data.group !== undefined) {
      snackOk(this.snackB, 'La pardera tiene un grupo asociado');
    } else {
      data.isUsedMeadow = !data.isUsedMeadow;
      data.isEmptyMeadow = !data.isEmptyMeadow;
      delete data.available;
      delete data.identificador;
      delete data.aforo;
      delete data.bovinos;
      delete data.mantenimiento;
      delete data.tamano;
      delete data.tamanoEnHectareas;
      delete data.fechaSalida;
      this.service.update(data).subscribe(rsp => {
        snackOk(this.snackB, 'Se removio la pradera');
        this.addIdArray();
      }, err => {
        snackError(this.snackB, err);
        this.loadPraderas();
      });
    }
  }

  goToAdmin(index: String) {
    this.router.navigate([index], { relativeTo: this.route });
  }

  goToAlert(index: String) {
    this.router.navigate([index + '/alertas'], { relativeTo: this.route });
  }



}
