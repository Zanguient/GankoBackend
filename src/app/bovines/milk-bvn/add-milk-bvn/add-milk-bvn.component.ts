import { Component, OnInit } from '@angular/core';
import { Produccion, TYPE_PROD_LECHE } from '../../../shared/models/milk-production.model';
import { Bovino } from '../../../shared/models/bovine.model';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { BovinesService } from '../../services/bovines.service';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';
import { snackError, snackOk } from '../../../util/snackbar-util';
import { nowFormat } from '../../../util/date-util';
import { finalize } from '../../../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-add-milk-bvn',
  templateUrl: './add-milk-bvn.component.html',
  styleUrls: ['./add-milk-bvn.component.scss']
})
export class AddMilkBvnComponent implements OnInit {

  loading = false;
  milkDate = nowFormat();
  item: Produccion = { bovino: '', fecha: new Date(), jornada: 'Mañana', litros: '', type: TYPE_PROD_LECHE };

  bvn: Bovino;

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar) {

    this.service.selected('')
      .subscribe(x => this.bvn = x, err => snackError(this.snack, err));

  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    this.item.bovino = this.bvn.id;
    this.item.fecha = new Date(this.milkDate);
    this.loading = true;
    this.service.addMilk(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Registro agregado');
      this.cancel();
    }, err => snackError(this.snack, err));
  }

}
