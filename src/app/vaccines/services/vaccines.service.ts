import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate, toDoc } from '../../util/http-util';
import { Vacuna, TYPE_VACUNA } from '../../shared/models/vaccine.model';
import { vaccines, vaccine } from './vaccines.mock';

@Injectable()
export class VaccinesService extends BaseService<Vacuna> {

  data: Vacuna[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Vacuna): Observable<string> {
    item.type = TYPE_VACUNA;
    item.idFinca = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('vacunas'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Vacuna[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : vaccines()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
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
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
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
