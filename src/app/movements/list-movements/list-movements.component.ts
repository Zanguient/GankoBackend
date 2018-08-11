import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../services/movements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimiento } from '../../shared/models/movement.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-list-movements',
  templateUrl: './list-movements.component.html',
  styleUrls: ['./list-movements.component.scss']
})
export class ListMovementsComponent {

  columnasPradL: string[] = ['id', 'transactionDate'];
  columnasPradO: string[] = ['id', 'transactionDate', 'group'];
  dataPradL: Movimiento[];
  dataPradO: Movimiento[];

  constructor(service: MovementsService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute, nav: NavService) {
    this.dataPradL = service.dataPradL;
    this.dataPradO = service.dataPradO;
  }

  clickPrueba() {
    console.log('Hola');
  }
}
