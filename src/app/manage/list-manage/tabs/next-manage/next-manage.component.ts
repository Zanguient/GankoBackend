import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Manejo } from '../../../../shared/models/manage.model';
import { BaseListComponent } from '../../../../util/base-list-component';
import { ManageService } from '../../../services/manage.service';

@Component({
  selector: 'app-next-manage',
  templateUrl: './next-manage.component.html',
  styleUrls: ['./next-manage.component.scss']
})
export class NextManageComponent extends BaseListComponent<Manejo> {

  constructor(service: ManageService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}
