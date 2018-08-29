import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Group } from '../../../shared/models/group.model';
import { snackError } from '../../../util/snackbar-util';
import { NavService } from '../../services/nav.service';
import { SelectedBvnService } from '../../services/selected-bvn.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent {

  data: Group[] = [];

  constructor(public nav: NavService, public service: SelectedBvnService, private snack: MatSnackBar, private router: Router,
    private route: ActivatedRoute) {
    nav.title = 'Seleccionar Grupo';
    this.service.listGroup()
      .subscribe(x => this.data = x, err => snackError(this.snack, err));
  }

  getHexColor(number) {
    return '#' + number.toString(16).slice(-6);
  }

  select(group: Group) {
    this.service.group = group;
    this.router.navigate(this.nav.nextNavigation, { relativeTo: this.route });
  }

}
