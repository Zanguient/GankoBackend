import { Injectable } from '@angular/core';
import { Movimiento } from '../../shared/models/movement.model';
import { BaseService } from '../../util/base-service';
import { Rspn, Doc } from '../../shared/models/response.model';
import { validate, listToDoc } from '../../util/http-util';
import { map, tap, mergeMap } from '../../../../node_modules/rxjs/operators';
import { timer, Observable } from '../../../../node_modules/rxjs';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { movements, movement } from './movement.mock';

@Injectable()
export class MovementsService extends BaseService<Movimiento> {

  dataPradL: Movimiento[] = [];
  dataPradO: Movimiento[] = [];
  data: Movimiento[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
    this.dataPradO.push(new Movimiento());
  }

  add(item: Movimiento): Observable<string> {
    item.idFarm = this.session.farmId;
    item.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('movimientos'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  list(): Observable<Movimiento[]> {
    return this.http.get<Rspn<Doc<Movimiento>[]>>(this.makeUrl('movimientos', this.session.farmId), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Movimiento): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Movimiento> {
    return timer(500).pipe(
      map(() => new Rspn(true, movement())),
      map(x => validate(x))
    );
  }
}
