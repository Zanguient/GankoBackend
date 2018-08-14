import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Mantenimiento, Pradera } from '../../../shared/models/meadow.model';
import { MeadowService } from '../../services/meadow.service';
import { mergeMap } from '../../../../../node_modules/rxjs/operators';
import { snackError, snackOk } from '../../../util/snackbar-util';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.scss']
})
export class AddMaintenanceComponent implements OnInit {

  mantenimiento: Mantenimiento = new Mantenimiento();
  item: Pradera;
  loading: boolean;

  constructor(private service: MeadowService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) {
    this.loading = true;
    route.paramMap.pipe(
      mergeMap(x => service.selected(x.get('id')))
    ).subscribe(x => {
      service.select(x);
      this.item = x;
    }, err => {
      snackError(this.snack, err);
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  calculateTotal() {
    this.mantenimiento.total = this.mantenimiento.cantidad * this.mantenimiento.valor;
  }

  add() {
    this.item.mantenimiento.push(this.mantenimiento);
    this.service.update(this.item).subscribe(rsp => {
      snackOk(this.snack, 'Se actualizo la informacion');
      this.cancel();
    }, err => snackError(this.snack, err));
  }

}
