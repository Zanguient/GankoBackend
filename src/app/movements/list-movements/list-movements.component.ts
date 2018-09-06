import { Component, ViewChild } from '@angular/core';
import { MovementsService } from '../services/movements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatTable } from '@angular/material';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';
import { BaseListComponent } from '../../util/base-list-component';
import { RemoveGroupDialogComponent } from '../remove-group-dialog/remove-group-dialog.component';
import { Pradera } from '../../shared/models/meadow.model';
import { MeadowService } from '../../meadow/services/meadow.service';
import { Group } from '../../shared/models/group.model';
import { Movimiento } from '../../shared/models/movement.model';
import { GroupsService } from '../../groups/service/groups.service';
import { snackOk, snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-list-movements',
  templateUrl: './list-movements.component.html',
  styleUrls: ['./list-movements.component.scss']
})
export class ListMovementsComponent extends BaseListComponent<Pradera> {

  @ViewChild('tableL') tableL: MatTable<Pradera[]>;
  @ViewChild('tableO') tableO: MatTable<Pradera[]>;
  columnasPradL = ['id', 'transactionDate'];
  columnasPradO = ['id', 'transactionDate', 'group'];
  dataL: Pradera[] = [];
  dataO: Pradera[] = [];
  g: Group[] = [];

  constructor(service: MeadowService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, private groupdialog: MatDialog, private meadowservice: MeadowService,
    private movementService: MovementsService, private groupService: GroupsService, private snackb: MatSnackBar) {
    super(service, dialog, router, route, snack);
    this.loadData(false);
  }

  loadData(refresh: boolean) {
    this.meadowservice.list().subscribe(
      x => {
        this.dataL = [];
        this.dataO = [];
        for (const pradera of x) {
          if (pradera.available && pradera.available !== undefined) {
            this.dataL.push(pradera);
          }
          if (!pradera.available && pradera.available !== undefined) {
            this.dataO.push(pradera);
          }
        }
        if (refresh) { this.refreshTable(); }
      }, err => snackError(this.snackb, err));
    this.groupService.list().subscribe(x => this.g = x, err => snackError(this.snackb, err));
  }

  refreshTable() {
    if (this.dataL.length !== 0) {
      this.tableL.renderRows();
    }
    if (this.dataO.length !== 0) {
      this.tableO.renderRows();
    }
  }

  addGroupDialog(item: Pradera) {
    const groups: Group[] = [];
    for (const group of this.g) {
      if (group.pradera === '') {
        groups.push(group);
      }
    }
    if (groups.length > 0) {
      this.viewGroupDialog(item, groups);
    } else {
      // No hay grupos por seleccionar
      snackOk(this.snackb, 'No hay grupos disponibles');
    }

  }

  viewGroupDialog(item: Pradera, options: Group[]) {
    const dialogRef = this.groupdialog.open(AddGroupDialogComponent, {
      data: { item: null, options: options, name: item.identificador },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(group => {
      if (group) {
        item.group = group.nombre;
        item.fechaOcupacion = new Date();
        item.bovinos = group.bovinos;
        item.available = false;

        const move: Movimiento = new Movimiento(null, null, null, 'Pradera ' + item.identificador, group.bovinos, new Date(), item.idFinca);

        group.pradera = item.id.toString();
        // actualiza informacion de la pradera
        this.meadowservice.update(item).subscribe(resp => {
          // si todo ok actualiza informacion de grupo
          this.updateGroup(move, group);
          // this.insertMovement(move);
        });
      }
    }, err => snackError(this.snackb, err));
  }

  updateGroup(move: Movimiento, gp: Group) {
    this.groupService.update(gp).subscribe(resp => {
      // si todo ok inserta info de movimiento
      this.insertMovement(move);
    }, err => snackError(this.snackb, err));
  }

  insertMovement(mov: Movimiento) {
    this.movementService.add(mov).subscribe(resp => {
      this.loadData(true);
      snackOk(this.snackb, 'Datos guardados correctamente');
    },
      err => snackError(this.snackb, err));
  }

  removeGroupDialog(item: Pradera) {
    const dialogRef = this.groupdialog.open(RemoveGroupDialogComponent, {
      data: { name: item.identificador },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        const nameGroup: string = item.group;
        // al aceptar el cirre del dialogo
        item.fechaSalida = new Date();
        item.available = true;
        item.bovinos = [];
        delete item.group;
        this.meadowservice.update(item).subscribe(() => {
          // si todo sale bien se obtiene el grupo asociado por el nombre
          this.getGroup(nameGroup);
        }, err => snackError(this.snackb, err));
      }
    }, err => snackError(this.snackb, err));
  }

  getGroup(name: string) {
    for (const group of this.g) {
      if (group.nombre === name) {
        group.pradera = '';
        this.updateGroupPrad(group);
        break;
      }
    }
  }

  updateGroupPrad(group: Group) {
    this.groupService.update(group).subscribe(resp => {
      snackOk(this.snackb, 'Datos guardados correctamente');
      this.loadData(true);
    }, err => snackError(this.snackb, err));
  }
}
