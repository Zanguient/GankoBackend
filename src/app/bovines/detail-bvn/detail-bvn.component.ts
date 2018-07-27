import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Bovino } from '../../shared/models/bovine.model';
import { BovinesService } from '../services/bovines.service';
import { MatSnackBar } from '@angular/material';
import { snackError } from '../../util/snackbar-util';
import { timer } from 'rxjs';

@Component({
  selector: 'app-detail-bvn',
  templateUrl: './detail-bvn.component.html',
  styleUrls: ['./detail-bvn.component.scss']
})
export class DetailBvnComponent implements OnInit {

  loading = false;
  item: Bovino;

  constructor(private service: BovinesService, route: ActivatedRoute, private snack: MatSnackBar) {
    this.loading = true;

    route.paramMap.pipe(
      mergeMap(x => this.service.selected(x.get('id')))
    )
      .subscribe(x => {
        this.service.select(x);
        this.item = x;
        this.loading = false;
      }, err => {
        snackError(this.snack, err);
        this.loading = false;
      });

  }

  ngOnInit() {
  }

}
