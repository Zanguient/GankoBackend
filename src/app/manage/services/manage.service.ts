import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, listToDoc, toDoc } from '../../util/http-util';
import { Manejo, TYPE_MANEJO } from '../../shared/models/manage.model';
import { manages, manage } from './manage.mock';

@Injectable()
export class ManageService extends BaseService<Manejo> {

  data: Manejo[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Manejo): Observable<string> {
    item.type = TYPE_MANEJO;
    item.idFinca = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('manejo'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Manejo[]> {
    return this.http.get<Rspn<Doc<Manejo>[]>>(this.makeUrl('manejo'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
    /*return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : manages()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );*/
  }

  listNext(from: Date): Observable<Manejo[]> {
    return this.http.get<Rspn<Doc<Manejo>[]>>(this.makeUrl('manejo', from), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Manejo): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('manejo', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Manejo> {
    return this.http.get<Rspn<Doc<Manejo>>>(this.makeUrl('manejo', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
