import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Leche } from '../../shared/models/milk.model';
import { BaseListComponent } from '../../util/base-list-component';
import { MilkService } from '../services/milk.service';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-list-milk',
  templateUrl: './list-milk.component.html',
  styleUrls: ['./list-milk.component.scss']
})
export class ListMilkComponent extends BaseListComponent<Leche> {

  constructor(service: MilkService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, nav: NavService) {
    super(service, dialog, router, route, snack);
    nav.filterable = false;
    nav.searchable = false;
  }

}
