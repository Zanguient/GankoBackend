import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate } from '../../util/http-util';
import { Leche } from '../../shared/models/milk.model';
import { milks, milk } from './milk.mock';

@Injectable()
export class MilkService extends BaseService<Leche> {

  data: Leche[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Leche): Observable<string> {
    item.idFarm = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Leche[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : milks()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Leche): Observable<string> {
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

  getById(id: string): Observable<Leche> {
    return timer(500).pipe(
      map(() => new Rspn(true, milk())),
      map(x => validate(x))
    );
  }
}
