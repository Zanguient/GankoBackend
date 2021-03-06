import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/util/base-service';
import { User, ROL_RANCHER } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/core/services/session.service';
import { validate, listToDoc, toDoc, delayRes } from 'src/app/util/http-util';
import { map, mergeMap } from 'rxjs/operators';
import { Rspn, Doc } from 'src/app/shared/models/response.model';

@Injectable()
export class RanchersService extends BaseService<User> {

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: User): Observable<string> {
    item.rol = ROL_RANCHER;
    return this.http.post<Rspn<string>>(this.makeUrl('user'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => delayRes(x))
    );
  }

  list(): Observable<User[]> {
    return this.http.get<Rspn<Doc<User>[]>>(this.makeUrl('user/ganaderos'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  update(item: User): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('user', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('user', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<User> {
    return this.http.post<Rspn<Doc<User>>>(this.makeUrl('user', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }
}
