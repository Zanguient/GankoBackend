import { Component, OnInit } from '@angular/core';
import { BovinesService } from '../services/bovines.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { mergeMap, finalize } from 'rxjs/operators';
import { Bovino } from '../../shared/models/bovine.model';
import { MatSnackBar } from '@angular/material';
import { snackError, snackOk } from '../../util/snackbar-util';

@Component({
  selector: 'app-remove-bvn',
  templateUrl: './remove-bvn.component.html',
  styleUrls: ['./remove-bvn.component.scss']
})
export class RemoveBvnComponent implements OnInit {

  item: Bovino;
  releaseDate: string;
  reason: string;

  loading = false;
  loadingBovine = false;

  constructor(private service: BovinesService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) {
    this.loadingBovine = true;
    route.paramMap.pipe(
      mergeMap(x => this.service.selected(x.get('id')))
    ).subscribe(x => {
      this.item = x;
      this.loadingBovine = false;
    }, err => {
      snackError(this.snack, err);
      this.loadingBovine = false;
    });

  }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../../']);
  }

  remove() {
    this.loading = true;
    this.item.retirado = true;
    this.item.motivoSalida = this.reason;
    this.item.fechaSalida = new Date(this.releaseDate);
    this.service.update(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Bovino retirado');
      this.router.navigate(['../../']);
    }, err => snackError(this.snack, err));

  }

}
