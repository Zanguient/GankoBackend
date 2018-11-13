import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Manejo } from '../../shared/models/manage.model';
import { ManageService } from '../services/manage.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize, filter as flt, mergeMap } from 'rxjs/operators';
import { NavService } from '../../core/services/nav.service';
import { SelectedBvnService } from 'src/app/core/services/selected-bvn.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { snackOk, snackError } from 'src/app/util/snackbar-util';

@Component({
  selector: 'app-list-manage',
  templateUrl: './list-manage.component.html',
  styleUrls: ['./list-manage.component.scss']
})
export class ListManageComponent extends BaseListComponent<Manejo> {

  filter = 0;

  constructor(private srv: ManageService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, public nav: NavService, private selected: SelectedBvnService) {
    super(srv, dialog, router, route, snack);
  }

  changeFilter(filter: number) {
    this.filter = filter;
    this.loading = true;

    let api = this.service.list();

    if (filter === 1) {
      api = this.srv.listNext();
    } else if (filter === 2) { api = this.srv.listPendings(); }

    api.pipe(
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x);
  }

  prepareSelectBvn() {
    this.nav.breadcrumb = [{ path: '../', title: 'Manejo' }];
    this.nav.nextNavigation = ['..', 'agregar'];
  }

  goToApply(item: Manejo) {
    this.service.select(item);
    this.router.navigate([item.id, 'aplicar'], { relativeTo: this.route });
  }

  goToBovines(item: Manejo) {
    this.selected.path = ['Manejo'];
    this.selected.lastPath = item.tratamiento;
    this.selected.editable = false;
    this.selected.selecteds = item.bovinos;
    this.router.navigate([item.id], { relativeTo: this.route });
  }

  omit(item: Manejo, index: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Descartar Manejo',
        msg: '¿ Desea descartar el manejo ?'
      }
    }).afterClosed().pipe(
      flt(x => x !== undefined),
      mergeMap(x => {
        item.estadoProximo = 2;
        return this.service.update(item);
      })
    ).subscribe(() => {
      this.data.splice(index, 1);
      snackOk(this.snackbar, 'Manejo Descartado');
    }, () => snackError(this.snackbar, 'Error al descartar manejo'));
  }


}
