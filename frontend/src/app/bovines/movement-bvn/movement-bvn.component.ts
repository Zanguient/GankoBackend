import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/core/services/nav.service';
import { BovinesService } from '../services/bovines.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/util/base-list-component';
import { Movimiento } from 'src/app/shared/models/movement.model';
import { Bovino } from 'src/app/shared/models/bovine.model';
import { mergeMap, finalize } from 'rxjs/operators';
import { snackError } from 'src/app/util/snackbar-util';

@Component({
  selector: 'app-movement-bvn',
  templateUrl: './movement-bvn.component.html',
  styleUrls: ['./movement-bvn.component.scss']
})
export class MovementBvnComponent {

  columnas = ['id', 'transactionDate'];
  data: Movimiento[] = [];
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar) {
    
    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listMovements(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));
   }

 

}
