import { Component, OnInit } from '@angular/core';
import { Group } from '../../shared/models/group.model';
import { GroupsService } from '../service/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { mergeMap, tap, finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {

  item: Group;
  loading: boolean;

  constructor(private service: GroupsService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) {

  }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.pipe(
      mergeMap(x => this.service.selected(x.get('id'))),
      tap(() => this.loading = false, () => this.loading = false)
    ).subscribe(x => this.item = x, err => snackError(this.snack, err));
  }

  getHexColor() {
    return '#' + this.item.color.toString(16).slice(-6);
  }

}
