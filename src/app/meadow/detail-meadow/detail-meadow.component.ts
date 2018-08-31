import { Component, OnInit } from '@angular/core';
import { Pradera } from '../../shared/models/meadow.model';
import { MeadowService } from '../services/meadow.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { mergeMap } from '../../../../node_modules/rxjs/operators';
import { snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-detail-meadow',
  templateUrl: './detail-meadow.component.html',
  styleUrls: ['./detail-meadow.component.scss']
})
export class DetailMeadowComponent implements OnInit {

  loading = false;
  item: Pradera;

  constructor(private service: MeadowService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) {
    this.loading = true;

    route.paramMap.pipe(
      mergeMap(x => this.service.selected(x.get('id')))
    ).subscribe(x => {
      this.service.select(x);
      this.item = x;
      this.loading = false;
    }, err => {
      snackError(this.snack, err);
      this.loading = false;
    });
  }

  goToPraderas() {
    this.service.selectedTab = 0;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
