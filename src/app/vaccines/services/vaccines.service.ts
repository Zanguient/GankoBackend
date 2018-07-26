import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate } from '../../util/http-util';
import { Vacuna } from '../../shared/models/vaccine.model';
import { vaccines, vaccine } from './vaccines.mock';

@Injectable()
export class VaccinesService extends BaseService<Vacuna> {

  data: Vacuna[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Vacuna): Observable<string> {
    item.idFinca = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
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
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
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
    return timer(500).pipe(
      map(() => new Rspn(true, vaccine())),
      map(x => validate(x))
    );
  }
}
