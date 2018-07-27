import { Component } from '@angular/core';
import { Sanidad } from '../../shared/models/health.model';
import { BovinesService } from '../services/bovines.service';
import { MatSnackBar } from '@angular/material';
import { mergeMap, finalize } from 'rxjs/operators';
import { snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-health-bvn',
  templateUrl: './health-bvn.component.html',
  styleUrls: ['./health-bvn.component.scss']
})
export class HealthBvnComponent {

  data: Sanidad[] = [];
  loading = false;

  constructor(private service: BovinesService, private snack: MatSnackBar) {

    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listHealth(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));

  }

}
