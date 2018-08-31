import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent } from '../../util/base-list-component';
import { NavService } from '../../core/services/nav.service';
import { Bovino } from '../../shared/models/bovine.model';
import { BovinesService } from '../services/bovines.service';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-bvn',
  templateUrl: './list-bvn.component.html',
  styleUrls: ['./list-bvn.component.scss']
})
export class ListBvnComponent extends BaseListComponent<Bovino> implements OnDestroy {

  constructor(private nav: NavService, public srv: BovinesService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(srv, dialog, router, route, snack);

    nav.title = 'Bovinos';
    nav.searchable = true;
    nav.filterable = true;

  }

  ngOnDestroy() {
    this.nav.searchable = false;
    this.nav.filterable = false;
    this.nav.searching = false;
  }

  removeAction(dialog: MatDialogRef<DeleteDialogComponent, any>, index: number) {
    dialog.afterClosed().pipe(
      filter(x => x !== undefined)
    ).subscribe(() => {
      this.service.select(this.data[index]);
      this.router.navigate([this.data[index].id, 'retirar'], { relativeTo: this.route });
    });
  }


}
