import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { from } from 'rxjs';
import { filter, finalize, mergeMap, tap, toArray } from 'rxjs/operators';
import { Bovino } from '../../../../shared/models/bovine.model';
import { snackError, snackOk } from '../../../../util/snackbar-util';
import { BovinesService } from '../../../services/bovines.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  serviceActivated = false;

  constructor(private service: BovinesService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    service.selected('').pipe(
      tap(x => this.bvn = x),
      tap(() => this.bvn.celos = this.bvn.celos ? this.bvn.celos : []),
      tap(() => this.bvn.celos = this.bvn.celos.map(x => new Date(x))),
      mergeMap(x => from(x.servicios ? x.servicios : [])),
      filter(x => !x.finalizado),
      toArray()
    ).subscribe(x => this.serviceActivated = x.length > 0);
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

      const time = (new Date(this.zealDate)).getTime() + (86400000 * 21);
      this.bvn.fechaProximoCelo = new Date(time);
      snackOk(this.snack, 'Celo Registrado');
    }, err => snackError(this.snack, err));
  }

  goToAddService() {
    this.router.navigate(['agregar'], { relativeTo: this.route });
  }

}
