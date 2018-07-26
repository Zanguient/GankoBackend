import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../../core/services/session.service';
import { Bovino } from '../../shared/models/bovine.model';
import { BaseService } from '../../util/base-service';
import { Observable, timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Rspn } from '../../shared/models/response.model';
import { validate } from '../../util/http-util';
import { bovines, bovine } from './bovines.mock';

@Injectable()
export class BovinesService extends BaseService<Bovino> {

  data: Bovino[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Bovino): Observable<string> {
    item.finca = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Bovino[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : bovines()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Bovino): Observable<string> {
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

  getById(id: string): Observable<Bovino> {
    return timer(500).pipe(
      map(() => new Rspn(true, bovine())),
      map(x => validate(x))
    );
  }

}
