import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Sanidad } from '../../shared/models/health.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HealthService } from '../services/health.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list-health',
  templateUrl: './list-health.component.html',
  styleUrls: ['./list-health.component.scss']
})
export class ListHealthComponent extends BaseListComponent<Sanidad> {

  filter = 0;

  constructor(service: HealthService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

  changeFilter(filter: number) {
    this.filter = filter;
    this.loading = true;
    this.service.list().pipe(
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x);
  }

}
