import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Sanidad } from '../../shared/models/health.model';
import { BaseListComponent } from '../../util/base-list-component';
import { HealthService } from '../services/health.service';

@Component({
  selector: 'app-list-health',
  templateUrl: './list-health.component.html',
  styleUrls: ['./list-health.component.scss']
})
export class ListHealthComponent extends BaseListComponent<Sanidad> {

  constructor(service: HealthService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}