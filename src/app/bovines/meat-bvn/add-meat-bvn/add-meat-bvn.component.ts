import { Component } from '@angular/core';
import { nowFormat } from '../../../util/date-util';
import { Meat, TYPE_CEBA } from '../../../shared/models/meat.model';
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
  item: Meat = { bovino: '', eliminado: false, fecha: new Date(), finca: '', gananciaPeso: 0, peso: 0, type: TYPE_CEBA };

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
    this.loading = true;
    this.service.addMeat(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Registro agregado');
      this.cancel();
    }, err => snackError(this.snack, err));
  }

}
