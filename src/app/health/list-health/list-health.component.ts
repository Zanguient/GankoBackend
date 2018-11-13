import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Sanidad } from '../../shared/models/health.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HealthService } from '../services/health.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, mergeMap, filter as flt } from 'rxjs/operators';
import { NavService } from '../../core/services/nav.service';
import { SelectedBvnService } from 'src/app/core/services/selected-bvn.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { snackOk, snackError } from 'src/app/util/snackbar-util';

@Component({
  selector: 'app-list-health',
  templateUrl: './list-health.component.html',
  styleUrls: ['./list-health.component.scss']
})
export class ListHealthComponent extends BaseListComponent<Sanidad> {

  filter = 0;

  constructor(private srv: HealthService, snack: MatSnackBar, dialog: MatDialog,
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
    this.nav.breadcrumb = [{ path: '../', title: 'Sanidad' }];
    this.nav.nextNavigation = ['..', 'agregar'];
  }

  goToApply(item: Sanidad) {
    this.service.select(item);
    this.router.navigate([item.id, 'aplicar'], { relativeTo: this.route });
  }

  goToBovines(item: Sanidad) {
    this.selected.path = ['Sanidad'];
    this.selected.lastPath = item.evento;
    this.selected.editable = false;
    this.selected.selecteds = item.bovinos;
    this.router.navigate([item.id], { relativeTo: this.route });
  }

  omit(item: Sanidad, index: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Descartar Sanidad',
        msg: '¿ Desea descartar el registro de sanidad ?'
      }
    }).afterClosed().pipe(
      flt(x => x !== undefined),
      mergeMap(x => {
        item.estadoProximo = 2;
        return this.service.update(item);
      })
    ).subscribe(() => {
      this.data.splice(index, 1);
      snackOk(this.snackbar, 'Registro Descartado');
    }, () => snackError(this.snackbar, 'Error al descartar registro'));
  }
}
