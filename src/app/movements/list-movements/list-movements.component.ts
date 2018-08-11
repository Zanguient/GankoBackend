import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../services/movements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimiento } from '../../shared/models/movement.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NavService } from '../../core/services/nav.service';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';
import { BaseListComponent } from '../../util/base-list-component';
import { RemoveGroupDialogComponent } from '../remove-group-dialog/remove-group-dialog.component';

@Component({
  selector: 'app-list-movements',
  templateUrl: './list-movements.component.html',
  styleUrls: ['./list-movements.component.scss']
})
export class ListMovementsComponent extends BaseListComponent<Movimiento> {

  columnasPradL = ['id', 'transactionDate'];
  columnasPradO = ['id', 'transactionDate', 'group'];

  constructor(service: MovementsService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, nav: NavService, private groupdialog: MatDialog) {
    super(service, dialog, router, route, snack);
  }


  addGroupDialog() {
    const dialogRef = this.groupdialog.open(AddGroupDialogComponent, {
      data: { item: 'hola' },
      autoFocus: false
    });
  }

  removeGroupDialog() {
    const dialogRef = this.groupdialog.open(RemoveGroupDialogComponent, {
      data: { item: 'hola' },
      autoFocus: false
    });
  }
}
