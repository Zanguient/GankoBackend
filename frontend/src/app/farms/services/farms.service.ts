import { Injectable } from '@angular/core';
import { Finca, TYPE_FINCA } from '../../shared/models/farm.model';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { Observable, timer } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, listToDoc, toDoc } from '../../util/http-util';
import { BaseService } from '../../util/base-service';
import { farms } from './farms.mock';
import { environment } from '../../../environments/environment';

@Injectable()
export class FarmsService extends BaseService<Finca> {

  data: Finca[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Finca): Observable<string> {
    item.type = TYPE_FINCA;
    item.usuarioId = this.session.id;
    return this.http.post<Rspn<string>>(this.makeUrl('finca'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Finca[]> {
    return this.http.get<Rspn<Doc<Finca>[]>>(this.makeUrl('finca'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Finca): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('finca', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('finca', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Finca> {
    return this.http.get<Rspn<Doc<Finca>>>(this.makeUrl('finca', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }

}
