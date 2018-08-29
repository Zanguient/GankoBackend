import { Component, OnInit } from '@angular/core';
import { Alimentacion } from '../../shared/models/feed.model';
import { BovinesService } from '../services/bovines.service';
import { MatSnackBar } from '@angular/material';
import { mergeMap, finalize } from 'rxjs/operators';
import { snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-feed-bvn',
  templateUrl: './feed-bvn.component.html',
  styleUrls: ['./feed-bvn.component.scss']
})
export class FeedBvnComponent {

  data: Alimentacion[] = [];
  loading = false;

  constructor(private service: BovinesService, private snack: MatSnackBar) {

    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listFeed(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));

  }

}
