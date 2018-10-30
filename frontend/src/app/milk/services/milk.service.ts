import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { SessionService } from '../../core/services/session.service';
import { Leche, TYPE_LECHE } from '../../shared/models/milk.model';
import { Doc, Rspn } from '../../shared/models/response.model';
import { BaseService } from '../../util/base-service';
import { listToDoc, toDoc, validate } from '../../util/http-util';

@Injectable()
export class MilkService extends BaseService<Leche> {

  data: Leche[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Leche): Observable<string> {
    item.type = TYPE_LECHE;
    item.idFarm = this.session.farmId;
    item.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('leche'), item,  this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Leche[]> {
    return this.http.get<Rspn<Doc<Leche>[]>>(this.makeUrl('leche', 'finca', this.session.farmId), this.makeAuth(this.session.token)).pipe(
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
