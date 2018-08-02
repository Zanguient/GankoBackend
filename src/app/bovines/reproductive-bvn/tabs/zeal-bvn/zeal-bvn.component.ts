import { Component, OnInit } from '@angular/core';
import { Bovino } from '../../../../shared/models/bovine.model';
import { BovinesService } from '../../../services/bovines.service';
import { tap, finalize } from '../../../../../../node_modules/rxjs/operators';
import { snackOk, snackError } from '../../../../util/snackbar-util';
import { MatSnackBar } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-zeal-bvn',
  templateUrl: './zeal-bvn.component.html',
  styleUrls: ['./zeal-bvn.component.scss']
})
export class ZealBvnComponent {

  zealDate = new Date();
  addMode = false;

  bvn: Bovino;

  loading: boolean;

  constructor(private service: BovinesService, private snack: MatSnackBar) {
    service.selected('')
      .subscribe(x => this.bvn = x);
  }

  setAddMode() {
    this.zealDate = new Date();
    this.addMode = true;
  }

  add() {
    this.loading = true;
    this.service.addZeal(this.bvn.id, this.zealDate).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      this.addMode = false;

      const zeals = this.bvn.celos ? this.bvn.celos : [];
      zeals.splice(0, 0, this.zealDate);

      const time = this.zealDate.getTime() + (86400000 * 21);
      this.bvn.fechaProximoCelo = new Date(time);
      snackOk(this.snack, 'Celo Registrado');
    }, err => snackError(this.snack, err));
  }

}
