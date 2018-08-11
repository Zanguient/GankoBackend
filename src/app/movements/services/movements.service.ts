import { Injectable } from '@angular/core';
import { Movimiento } from '../../shared/models/movement.model';

@Injectable()
export class MovementsService {

  dataPradL: Movimiento[] = [];
  dataPradO: Movimiento[] = [];

  constructor() {
    this.dataPradO.push(new Movimiento());
  }
}
