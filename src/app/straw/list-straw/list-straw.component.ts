import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Straw } from '../../shared/models/straw.model';
import { BaseListComponent } from '../../util/base-list-component';
import { StrawService } from '../services/straw.service';

@Component({
  selector: 'app-list-straw',
  templateUrl: './list-straw.component.html',
  styleUrls: ['./list-straw.component.scss']
})
export class ListStrawComponent extends BaseListComponent<Straw> {

  constructor(service: StrawService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}
