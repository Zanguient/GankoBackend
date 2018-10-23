import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { Observable, timer } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { validate, listToDoc } from '../../util/http-util';
import { Rspn, Doc } from '../../shared/models/response.model';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { meadows, meadow } from './meadow.mock';
import { MeadowAlarm } from '../../shared/models/meadowAlarm.model';
import { meadowAlarms, meadowAlarm } from './meadowAlarm.mock';

@Injectable()
export class MeadowAlarmService extends BaseService<MeadowAlarm> {

  data: MeadowAlarm[] = [];
  idFarm: string;
  selectedTab = 0;
  idPradera: string;

  constructor(private http: HttpClient, private session: SessionService) {
    super();
    this.idFarm = session.farmId;
  }

  add(item: MeadowAlarm): Observable<string> {
    item.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('praderas', 'alertas'), item,
      this.makeAuth(this.session.token)).pipe(
        map(x => validate(x))
      );
  }

  list(): Observable<MeadowAlarm[]> {
    return this.http.get<Rspn<Doc<MeadowAlarm>[]>>(this.makeUrl('praderas', this.idPradera, 'alertas'),
      this.makeAuth(this.session.token)).pipe(
        map(x => validate(x)),
        mergeMap(x => listToDoc(x)),
        tap(x => this.data = x)
      );
  }

  update(item: MeadowAlarm): Observable<string> {
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

  getById(id: string): Observable<MeadowAlarm> {
    return timer(500).pipe(
      map(() => new Rspn(true, meadowAlarm())),
      map(x => validate(x))
    );
  }

  getByIdFarm(id: string): Observable<MeadowAlarm[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : meadowAlarms()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }
}
