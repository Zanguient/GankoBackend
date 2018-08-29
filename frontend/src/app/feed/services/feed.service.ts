import { Injectable } from '@angular/core';
import { Alimentacion } from '../../shared/models/feed.model';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate } from '../../util/http-util';
import { feeds, feed } from './feed.mock';

@Injectable()
export class FeedService extends BaseService<Alimentacion> {

  data: Alimentacion[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Alimentacion): Observable<string> {
    item.idFinca = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Alimentacion[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : feeds()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Alimentacion): Observable<string> {
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

  getById(id: string): Observable<Alimentacion> {
    return timer(500).pipe(
      map(() => new Rspn(true, feed())),
      map(x => validate(x))
    );
  }
}
