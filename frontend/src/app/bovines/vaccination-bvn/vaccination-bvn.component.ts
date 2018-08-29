import { Component } from '@angular/core';
import { Vacuna } from '../../shared/models/vaccine.model';
import { BovinesService } from '../services/bovines.service';
import { MatSnackBar } from '@angular/material';
import { mergeMap, finalize } from 'rxjs/operators';
import { snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-vaccination-bvn',
  templateUrl: './vaccination-bvn.component.html',
  styleUrls: ['./vaccination-bvn.component.scss']
})
export class VaccinationBvnComponent {

  data: Vacuna[] = [];
  loading = false;

  constructor(private service: BovinesService, private snack: MatSnackBar) {

    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listVaccines(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));

  }
}
