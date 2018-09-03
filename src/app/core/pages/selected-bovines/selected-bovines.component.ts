import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { filter, map, toArray, finalize } from 'rxjs/operators';
import { snackError } from '../../../util/snackbar-util';
import { BovineRemoved, SelectedBvnService } from '../../services/selected-bvn.service';

@Component({
  selector: 'app-selected-bovines',
  templateUrl: './selected-bovines.component.html',
  styleUrls: ['./selected-bovines.component.scss']
})
export class SelectedBovinesComponent {

  data: BovineRemoved[] = [];
  loading: boolean;

  changes = 0;

  constructor(public service: SelectedBvnService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    this.loading = true;
    service.listSelecteds().pipe(
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));
  }

  next() {
    from(this.data).pipe(
      filter(x => !x.removed),
      map(x => x.bvn.id),
      toArray()
    ).subscribe(x => {
      this.service.selecteds = x;
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  cancel() {
    this.data = [];
    this.router.navigate(['../'], { relativeTo: this.route });
  }


}
