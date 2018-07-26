import { Injectable } from '@angular/core';
import { BaseService } from '../../util/base-service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/services/session.service';
import { timer, Observable } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { map, tap } from 'rxjs/operators';
import { validate } from '../../util/http-util';
import { Group } from '../../shared/models/group.model';
import { groups, group } from './group.mock';

@Injectable()
export class GroupsService extends BaseService<Group> {

  data: Group[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Group): Observable<string> {
    item.finca = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Group[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : groups()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Group): Observable<string> {
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

  getById(id: string): Observable<Group> {
    return timer(500).pipe(
      map(() => new Rspn(true, group())),
      map(x => validate(x))
    );
  }
}
