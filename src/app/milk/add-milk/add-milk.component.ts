import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leche, TYPE_LECHE } from '../../shared/models/milk.model';
import { MatSnackBar } from '@angular/material';
import { MilkService } from '../services/milk.service';
import { finalize } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';


@Component({
  selector: 'app-add-milk',
  templateUrl: './add-milk.component.html',
  styleUrls: ['./add-milk.component.scss']
})
export class AddMilkComponent implements OnInit {

  loading = false;
  date: Date;

  item: Leche = {
    operacion: '',
    valorLitro: 0,
    numeroLitros: 0,
    totalLitros: 0,
    type: TYPE_LECHE
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: MilkService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    this.item.totalLitros = this.item.valorLitro * this.item.numeroLitros;
    if (this.date) { this.item.fecha = new Date(this.date); }
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Producción de leche Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));
  }

}
