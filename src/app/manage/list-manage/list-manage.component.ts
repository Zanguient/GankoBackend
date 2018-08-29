import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Manejo } from '../../shared/models/manage.model';
import { ManageService } from '../services/manage.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.scss']
})
export class ListManageComponent extends BaseListComponent<Manejo> {

  filter = 0;

  constructor(service: ManageService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, public nav: NavService) {
    super(service, dialog, router, route, snack);
  }

  changeFilter(filter: number) {
    this.filter = filter;
    this.loading = true;
    this.service.list().pipe(
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x);
  }

  prepareSelectBvn() {
    this.nav.breadcrumb = [{ path: '../', title: 'Manejo' }];
    this.nav.nextNavigation = ['..', 'agregar'];
  }

  goToApply(item:Manejo){
    this.service.select(item);
    this.router.navigate([item.id, 'aplicar'], {relativeTo: this.route});
  }

}
