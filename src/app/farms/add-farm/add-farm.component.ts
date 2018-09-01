import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FarmsService } from '../services/farms.service';
import { Finca, TYPE_FINCA } from '../../shared/models/farm.model';
import { MatSnackBar } from '@angular/material';
import { snackError, snackOk } from '../../util/snackbar-util';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.scss']
})
export class AddFarmComponent implements OnInit {

  farm: Finca = { nombre: '', hectareas: 1, ubicacion: '' , type: TYPE_FINCA};
  loading = false;
  editable = false;

  farmOrigin: Finca;

  constructor(private router: Router, private service: FarmsService, private snackbar: MatSnackBar,
    private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editable = true;
      this.service.selected(id)
        .subscribe(x => {
          this.farmOrigin = x;
          this.farm = Object.assign({}, x);
        });
    }
  }

  ngOnInit() {
  }

  add() {
    this.loading = true;
    (this.editable ? this.service.update(this.farm) : this.service.add(this.farm)).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => this.addOk(), () => snackError(this.snackbar, 'Error al agregar finca'));
  }

  addOk() {
    snackOk(this.snackbar, this.editable ? 'Finca actualizada' : 'Finca agregada');
    if (this.editable) { Object.assign(this.farmOrigin, this.farm); }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
