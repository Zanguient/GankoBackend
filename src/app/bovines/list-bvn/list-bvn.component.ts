import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent } from '../../util/base-list-component';
import { NavService } from '../../core/services/nav.service';
import { Bovino } from '../../shared/models/bovine.model';
import { BovinesService } from '../services/bovines.service';

@Component({
  selector: 'app-list-bvn',
  templateUrl: './list-bvn.component.html',
  styleUrls: ['./list-bvn.component.scss']
})
export class ListBvnComponent extends BaseListComponent<Bovino> {

  constructor(nav: NavService, service: BovinesService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}
