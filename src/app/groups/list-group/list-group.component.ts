import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../../shared/models/group.model';
import { BaseListComponent } from '../../util/base-list-component';
import { GroupsService } from '../service/groups.service';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent extends BaseListComponent<Group> {

  constructor(service: GroupsService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, public nav: NavService) {
    super(service, dialog, router, route, snack);
    nav.searchable = false;
    nav.filterable = false;
  }

  getHexColor(number) {
    const bbggrr = ('000000' + Math.abs(number).toString(16)).slice(-6);
    const rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return '#' + rrggbb;
  }

  goToAdd() {
    this.nav.breadcrumb = [{ path: '../', title: 'Grupos' }];
    this.nav.nextNavigation = ['..', 'agregar'];
    this.router.navigate(['seleccionar'], { relativeTo: this.route });
  }

}
