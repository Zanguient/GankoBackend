import { Component } from '@angular/core';
import { BaseListComponent } from '../../util/base-list-component';
import { Vacuna } from '../../shared/models/vaccine.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { VaccinesService } from '../services/vaccines.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, filter as flt, mergeMap } from 'rxjs/operators';
import { NavService } from '../../core/services/nav.service';
import { SelectedBvnService } from 'src/app/core/services/selected-bvn.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { snackOk, snackError } from 'src/app/util/snackbar-util';

@Component({
  selector: 'app-list-vaccines',
  templateUrl: './list-vaccines.component.html',
  styleUrls: ['./list-vaccines.component.scss']
})
export class ListVaccinesComponent extends BaseListComponent<Vacuna> {

  filter = 0;

  constructor(private srv: VaccinesService, snack: MatSnackBar, dialog: MatDialog,
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
    this.nav.breadcrumb = [{ path: '../', title: 'Vacunas' }];
    this.nav.nextNavigation = ['..', 'agregar'];
  }

  goToApply(item: Vacuna) {
    this.service.select(item);
    this.router.navigate([item.id, 'aplicar'], { relativeTo: this.route });
  }

  goToBovines(item: Vacuna) {
    this.selected.path = ['Vacunas'];
    this.selected.lastPath = item.descripcion;
    this.selected.editable = false;
    this.selected.selecteds = item.bovinos;
    this.router.navigate([item.id], { relativeTo: this.route });
  }

  omit(item: Vacuna, index: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Descartar Vacuna',
        msg: '¿ Desea descartar la vacuna ?'
      }
    }).afterClosed().pipe(
      flt(x => x !== undefined),
      mergeMap(x => {
        item.estadoProximo = 2;
        return this.service.update(item);
      })
    ).subscribe(() => {
      this.data.splice(index, 1);
      snackOk(this.snackbar, 'Vacuna Descartada');
    }, () => snackError(this.snackbar, 'Error al descartar vacuna'));
  }

}
