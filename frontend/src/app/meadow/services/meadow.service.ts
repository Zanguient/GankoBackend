import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { Pradera } from '../../shared/models/meadow.model';
import { Observable, timer } from '../../../../node_modules/rxjs';
import { map, tap } from '../../../../node_modules/rxjs/operators';
import { validate } from '../../util/http-util';
import { Rspn } from '../../shared/models/response.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { meadows, meadow } from './meadow.mock';

@Injectable()
export class MeadowService extends BaseService<Pradera> {

  data: Pradera[] = [];
  idFarm: string;
  selectedTab = 0;

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
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : meadows()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Pradera): Observable<string> {
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

  getById(id: string): Observable<Pradera> {
    return timer(500).pipe(
      map(() => new Rspn(true, meadow())),
      map(x => validate(x))
    );
  }

  getByIdFarm(id: string): Observable<Pradera[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : meadows()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }
}
