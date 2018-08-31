import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, toDoc, listToDoc } from '../../util/http-util';
import { Sanidad, TYPE_SANIDAD } from '../../shared/models/health.model';
import { healths, health } from './health.mock';

@Injectable()
export class HealthService extends BaseService<Sanidad> {

  data: Sanidad[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Sanidad): Observable<string> {
    item.type = TYPE_SANIDAD;
    item.idFinca = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('sanidad'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  listRecent(): Observable<Sanidad[]> {
    const id = this.session.farmId;
    return this.http.get<Rspn<Doc<Sanidad>[]>>(this.makeUrl('sanidad/finca',id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)); /*
    );*/
  }

  listProx(): Observable<Sanidad[]> {
    const id = this.session.farmId;
    return this.http.get<Rspn<Doc<Sanidad>[]>>(this.makeUrl('sanidad/finca',id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)); /*
    );*/
  }

  listPending(): Observable<Sanidad[]> {
    const id = this.session.farmId;
    return this.http.get<Rspn<Doc<Sanidad>[]>>(this.makeUrl('sanidad/finca',id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)); /*
    );*/
  }

  update(item: Sanidad): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('sanidad'), item, this.makeAuth(this.session.token)).pipe(
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
    return this.http.get<Rspn<Doc<Sanidad>>>(this.makeUrl('sanidad', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
