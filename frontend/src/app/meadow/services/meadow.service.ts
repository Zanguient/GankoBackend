import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { Pradera } from '../../shared/models/meadow.model';
import { Observable, timer } from '../../../../node_modules/rxjs';
import { map, tap, mergeMap } from '../../../../node_modules/rxjs/operators';
import { validate, listToDoc, toDoc } from '../../util/http-util';
import { Rspn, Doc } from '../../shared/models/response.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { meadows, meadow } from './meadow.mock';

@Injectable()
export class MeadowService extends BaseService<Pradera> {

  data: Pradera[] = [];
  idFarm: string;
  selectedTab = 0;
  idPradera = null;

  constructor(private http: HttpClient, private session: SessionService) {
    super();
    this.idFarm = session.farmId;
  }

  add(item: Pradera): Observable<string> {
    item.idFinca = this.session.farmId;
    item.channels = [this.session.id];
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Pradera[]> {
    return this.http.get<Rspn<Doc<Pradera>[]>>(this.makeUrl('praderas', this.session.farmId,this.session.id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }

  update(item: Pradera): Observable<string> {
    let id = item.id;
    delete item.id;
    if (id === undefined) {
      id = this.idPradera;
    }
    return this.http.put<Rspn<string>>(this.makeUrl('praderas', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Pradera> {
    this.idPradera = id;
    return this.http.get<Rspn<Doc<Pradera>>>(this.makeUrl('praderas', id, 'pradera'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
