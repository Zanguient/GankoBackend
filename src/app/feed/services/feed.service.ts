import { Injectable } from '@angular/core';
import { Alimentacion, TYPE_ALIMENTACION } from '../../shared/models/feed.model';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, listToDoc, toDoc } from '../../util/http-util';
import { feeds, feed } from './feed.mock';

@Injectable()
export class FeedService extends BaseService<Alimentacion> {

  data: Alimentacion[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Alimentacion): Observable<string> {
    item.type = TYPE_ALIMENTACION;
    item.idFinca = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('alimentacion'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Alimentacion[]> {
    return this.http.get<Rspn<Doc<Alimentacion>[]>>(this.makeUrl('alimentacion'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Alimentacion): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('alimentacion', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('alimentacion', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Alimentacion> {
    return this.http.get<Rspn<Doc<Alimentacion>>>(this.makeUrl('alimentacion', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
