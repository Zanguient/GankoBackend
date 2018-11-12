import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/util/base-list-component';
import { User } from 'src/app/shared/models/user.model';
import { RanchersService } from '../services/ranchers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-rancher',
  templateUrl: './list-rancher.component.html',
  styleUrls: ['./list-rancher.component.scss']
})
export class ListRancherComponent  extends BaseListComponent<User> {

  constructor(service: RanchersService, router: Router, route: ActivatedRoute, dialog: MatDialog, snack: MatSnackBar) {
    super(service, dialog, router, route, snack);
  }

}
