import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { BaseListComponent } from 'src/app/util/base-list-component';
import { User } from 'src/app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent extends BaseListComponent<User> {

  constructor(service: UsersService, router: Router, route: ActivatedRoute, dialog: MatDialog, snack: MatSnackBar) {
    super(service, dialog, router, route, snack);
  }

}
