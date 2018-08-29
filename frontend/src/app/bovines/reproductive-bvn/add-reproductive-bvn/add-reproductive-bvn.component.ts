import { Component } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Bovino, Servicio } from '../../../shared/models/bovine.model';
import { snackError, snackOk } from '../../../util/snackbar-util';
import { BovinesService, ItemEmp } from '../../services/bovines.service';
import { EmpadreDialogComponent } from '../empadre-dialog/empadre-dialog.component';
import { filter, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-reproductive-bvn',
  templateUrl: './add-reproductive-bvn.component.html',
  styleUrls: ['./add-reproductive-bvn.component.scss']
})
export class AddReproductiveBvnComponent {

  bull = 'Monta Natural';

  loading = false;
  bvn: Bovino;

  item: Servicio = { condicionCorporal: 0, fecha: new Date(), finalizado: false, empadre: this.bull, fechaUltimoCelo: null };

  itemEmp: ItemEmp = null;

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar,
    private dialog: MatDialog) {

    this.service.selected('')
      .subscribe(x => {
        this.bvn = x;
        this.item.fechaUltimoCelo = this.bvn.celos[0];
      }, err => snackError(this.snack, err));

  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    if (this.item.empadre === this.bull) {
      this.item.codigoToro = this.itemEmp.cod;
    } else {
      this.item.pajilla = `Canastilla: ${this.itemEmp.arg}, Id: ${this.itemEmp.cod}`;
    }
    this.loading = true;
    this.service.addService(this.bvn.id, this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {

      const srvs = this.bvn.servicios ? this.bvn.servicios : [];
      srvs.splice(0, 0, this.item);
      this.bvn.servicios = srvs;

      snackOk(this.snack, 'Servicio registrado');
      this.cancel();
    }, err => snackError(this.snack, err));
  }

  findItemEmp() {
    this.dialog.open(EmpadreDialogComponent, {
      width: '300px',
      data: { type: this.item.empadre === this.bull ? 'bull' : 'straw' },
      autoFocus: false
    })
      .afterClosed().pipe(
        filter(x => x !== undefined)
      )
      .subscribe(x => this.itemEmp = x.item);
  }


}
