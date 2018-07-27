import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BovinesService } from '../services/bovines.service';
import { Leche } from '../../shared/models/milk.model';
import { mergeMap, finalize } from 'rxjs/operators';
import { snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-milk-bvn',
  templateUrl: './milk-bvn.component.html',
  styleUrls: ['./milk-bvn.component.scss']
})
export class MilkBvnComponent {

  data: Leche[] = [];
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar) {

    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listMilk(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));

  }

  goToAdd() {

  }

}
