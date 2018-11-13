import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, toDoc, listToDoc, delayRes } from '../../util/http-util';
import { Vacuna, TYPE_VACUNA } from '../../shared/models/vaccine.model';
import { vaccines, vaccine } from './vaccines.mock';
import { Manejo } from '../../shared/models/manage.model';

@Injectable()
export class VaccinesService extends BaseService<Vacuna> {

  data: Vacuna[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Vacuna): Observable<string> {
    item.type = TYPE_VACUNA;
    item.idFinca = this.session.farmId;
    item.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('vacunas'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item)),
      mergeMap(x => delayRes(x))
    );
  }

  list(): Observable<Vacuna[]> {
    return this.http.get<Rspn<Doc<Vacuna>[]>>(this.makeUrl('vacunas', 'finca', this.session.farmId),
      this.makeAuthAndParams(this.session.token, ['q', 'recientes']))
      .pipe(
        map(x => validate(x)),
        mergeMap(x => listToDoc(x)),
        tap(x => this.data = x)
      );
  }

  listNext(): Observable<Vacuna[]> {
    return this.http.get<Rspn<Doc<Vacuna>[]>>(this.makeUrl('vacunas', 'finca', this.session.farmId),
      this.makeAuthAndParams(this.session.token, ['q', 'proximos']))
      .pipe(
        map(x => validate(x)),
        mergeMap(x => listToDoc(x)),
        tap(x => this.data = x)
      );
  }

  listPendings(): Observable<Vacuna[]> {
    return this.http.get<Rspn<Doc<Vacuna>[]>>(this.makeUrl('vacunas', 'finca', this.session.farmId),
      this.makeAuthAndParams(this.session.token, ['q', 'pendientes']))
      .pipe(
        map(x => validate(x)),
        mergeMap(x => listToDoc(x)),
        tap(x => this.data = x)
      );
  }

  update(item: Vacuna): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('vacunas', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('vacunas', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Vacuna> {
    return this.http.get<Rspn<Doc<Vacuna>>>(this.makeUrl('vacunas', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
