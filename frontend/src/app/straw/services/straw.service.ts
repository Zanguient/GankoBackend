import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, listToDoc, toDoc } from '../../util/http-util';
import { Straw, TYPE_PAJILLA } from '../../shared/models/straw.model';
import { straws, straw } from './straw.mock';

@Injectable()
export class StrawService extends BaseService<Straw> {

  data: Straw[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Straw): Observable<string> {
    item.type = TYPE_PAJILLA;
    item.idFarm = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('pajillas'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Straw[]> {
    const farm = this.session.farmId;
    return this.http.get<Rspn<Doc<Straw>[]>>(this.makeUrl('pajillas', farm), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Straw): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('pajillas', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('pajillas', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Straw> {
    return this.http.get<Rspn<Doc<Straw>>>(this.makeUrl('pajillas', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
