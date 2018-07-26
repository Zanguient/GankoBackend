import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent } from '../../util/base-list-component';
import { Alimentacion } from '../../shared/models/feed.model';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-list-feed',
  templateUrl: './list-feed.component.html',
  styles: []
})
export class ListFeedComponent extends BaseListComponent<Alimentacion> {

  constructor(service: FeedService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}
