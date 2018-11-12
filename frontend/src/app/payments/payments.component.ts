import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/services/nav.service';
import { PaymentsService } from './services/payments.service';
import { User } from '../shared/models/user.model';
import { finalize, tap } from 'rxjs/operators';
import { MatDialog, MatSnackBar } from '@angular/material';
import { snackError, snackOk } from '../util/snackbar-util';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {

  data: User[] = [];
  loading = false;

  constructor(nav: NavService, private service: PaymentsService, private dialog: MatDialog, private snack: MatSnackBar) {
    nav.title = 'Pagos';
    service.list().pipe(
      finalize(() => this.loading = true)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));
  }

  extends(index: number) {
    this.service.update(this.data[index].id).pipe(
      tap(() => this.data.splice(index, 1))
    ).subscribe(() => snackOk(this.snack, 'Pago actualizado.'), err => snackError(this.snack, err));
  }

}
