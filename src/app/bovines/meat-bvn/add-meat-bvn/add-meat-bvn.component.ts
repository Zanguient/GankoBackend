import { Component } from '@angular/core';
import { nowFormat } from '../../../util/date-util';
import { Meet, TYPE_CEBA } from '../../../shared/models/meet.model';
import { Bovino } from '../../../shared/models/bovine.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BovinesService } from '../../services/bovines.service';
import { MatSnackBar } from '@angular/material';
import { snackError, snackOk } from '../../../util/snackbar-util';
import { finalize } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-add-meat-bvn',
  templateUrl: './add-meat-bvn.component.html',
  styleUrls: ['./add-meat-bvn.component.scss']
})
export class AddMeatBvnComponent {

  loading = false;
  meetDate = nowFormat();
  item: Meet = { bovino: '', eliminado: false, fecha: new Date(), finca: '', gananciaPeso: 0, peso: 0, type: TYPE_CEBA };

  bvn: Bovino;

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar) {

    this.service.selected('')
      .subscribe(x => this.bvn = x, err => snackError(this.snack, err));

  }


  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    this.item.bovino = this.bvn.id;
    this.item.fecha = new Date(this.meetDate);
    this.loading = true;
    this.service.addMeet(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Registro agregado');
      this.cancel();
    }, err => snackError(this.snack, err));
  }

}
