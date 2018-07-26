import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Manejo } from '../../shared/models/manage.model';
import { BaseListComponent } from '../../util/base-list-component';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.scss']
})
export class ListManageComponent extends BaseListComponent<Manejo> {

  constructor(service: ManageService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}
