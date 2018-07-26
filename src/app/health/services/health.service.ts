import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate } from '../../util/http-util';
import { Sanidad } from '../../shared/models/health.model';
import { healths, health } from './health.mock';

@Injectable()
export class HealthService extends BaseService<Sanidad> {

  data: Sanidad[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Sanidad): Observable<string> {
    item.idFinca = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Sanidad[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : healths()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Sanidad): Observable<string> {
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

  getById(id: string): Observable<Sanidad> {
    return timer(500).pipe(
      map(() => new Rspn(true, health())),
      map(x => validate(x))
    );
  }
}
