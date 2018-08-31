import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, toDoc, listToDoc } from '../../util/http-util';
import { Leche, TYPE_LECHE } from '../../shared/models/milk.model';
import { milks, milk } from './milk.mock';
import { environment } from '../../../environments/environment';

@Injectable()
export class MilkService extends BaseService<Leche> {

  data: Leche[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Leche): Observable<string> {
    item.type = TYPE_LECHE;
    item.idFarm = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('leche'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Leche[]> {
    return this.http.get<Rspn<Doc<Leche>[]>>(this.makeUrl('leche', 'finca', this.session.farmId),
      this.makeAuth(this.session.token)).pipe(
        map(x => validate(x)),
        mergeMap(x => listToDoc(x)),
        tap(x => this.data = x)
      );
  }

  update(item: Leche): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('leche', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('leche', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Leche> {
    return this.http.get<Rspn<Doc<Leche>>>(this.makeUrl('leche', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
