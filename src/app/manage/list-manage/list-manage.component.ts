import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Manejo } from '../../shared/models/manage.model';
import { ManageService } from '../services/manage.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.scss']
})
export class ListManageComponent extends BaseListComponent<Manejo> {

  filter = 0;

  constructor(service: ManageService, snack: MatSnackBar, dialog: MatDialog,
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
