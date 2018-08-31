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

  listRecent(): Observable<Manejo[]> {
    const id = this.session.farmId;
    return this.http.get<Rspn<Doc<Manejo>[]>>(this.makeUrl('manejo/finca',id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)); /*
    );*/
  }

  listProx(): Observable<Manejo[]> {
    const id = this.session.farmId;
    return this.http.get<Rspn<Doc<Manejo>[]>>(this.makeUrl('manejo/finca',id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)); /*
    );*/
  }

  listPending(): Observable<Manejo[]> {
    const id = this.session.farmId;
    return this.http.get<Rspn<Doc<Manejo>[]>>(this.makeUrl('manejo/finca',id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)); /*
    );*/
  }

  update(item: Manejo): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('manejo'), item, this.makeAuth(this.session.token)).pipe(
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
