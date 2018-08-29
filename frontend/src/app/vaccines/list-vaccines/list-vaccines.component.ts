import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Vacuna } from '../../shared/models/vaccine.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { VaccinesService } from '../services/vaccines.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-list-vaccines',
  templateUrl: './list-vaccines.component.html',
  styleUrls: ['./list-vaccines.component.scss']
})
export class ListVaccinesComponent extends BaseListComponent<Vacuna> {

  filter = 0;

  constructor(service: VaccinesService, snack: MatSnackBar, dialog: MatDialog,
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
    this.nav.breadcrumb = [{ path: '../', title: 'Vacunas' }];
    this.nav.nextNavigation = ['..', 'agregar'];
  }

  goToApply(item:Vacuna){
    this.service.select(item);
    this.router.navigate([item.id, 'aplicar'], {relativeTo: this.route});
  }

}
