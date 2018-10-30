import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent } from '../../util/base-list-component';
import { Alimentacion } from '../../shared/models/feed.model';
import { FeedService } from '../services/feed.service';
import { NavService } from '../../core/services/nav.service';
import { SelectedBvnService } from 'src/app/core/services/selected-bvn.service';

@Component({
  selector: 'app-list-feed',
  templateUrl: './list-feed.component.html',
  styles: []
})
export class ListFeedComponent extends BaseListComponent<Alimentacion> {

  constructor(service: FeedService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, public nav: NavService, private selected: SelectedBvnService) {
    super(service, dialog, router, route, snack);
    nav.filterable = false;
    nav.searchable = false;
  }

  goToBovines(item: Alimentacion) {
    this.selected.path = ['Alimentación'];
    this.selected.lastPath = item.tipoAlimento;
    this.selected.editable = false;
    this.selected.selecteds = item.bovinos;
    this.router.navigate([item.id], { relativeTo: this.route });
  }


  prepareSelectBvn() {
    this.nav.breadcrumb = [{ path: '../', title: 'Alimentación' }];
    this.nav.nextNavigation = ['..', 'agregar'];
  }

}
