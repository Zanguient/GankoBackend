import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, mergeMap } from 'rxjs/operators';
import { Produccion } from '../../shared/models/milk-production.model';
import { snackError } from '../../util/snackbar-util';
import { BovinesService } from '../services/bovines.service';

@Component({
  selector: 'app-milk-bvn',
  templateUrl: './milk-bvn.component.html',
  styleUrls: ['./milk-bvn.component.scss']
})
export class MilkBvnComponent {

  data: Produccion[] = [];
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar) {

    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listMilk(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));

  }

  goToAdd() {
    this.router.navigate(['agregar'], { relativeTo: this.route });
  }

}
