import { Injectable } from '@angular/core';
import { Finca, TYPE_FINCA } from '../../shared/models/farm.model';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { Observable, timer } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate } from '../../util/http-util';
import { BaseService } from '../../util/base-service';
import { farms } from './farms.mock';

@Injectable()
export class FarmsService extends BaseService<Finca> {

  data: Finca[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Finca): Observable<string> {
    item.type = TYPE_FINCA;
    item.usuarioId = this.session.id;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Finca[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : farms()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Finca): Observable<string> {
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

  getById(id: string): Observable<Finca> {
    const fincaTest: Finca = { hectareas: 10, nombre: 'La finca', ubicacion: 'Ubicación' };
    return timer(500).pipe(
      map(() => new Rspn(true, fincaTest)),
      map(x => validate(x))
    );
  }

}
