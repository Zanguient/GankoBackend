import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/core/services/session.service';
import { Rspn, Doc } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { validate, listToDoc } from 'src/app/util/http-util';

@Injectable()
export class PaymentsService {

  constructor(private http: HttpClient, private session: SessionService) { }
  url = environment.urlBase + '/user/pagos';

  list(): Observable<User[]> {
    return this.http.get<Rspn<Doc<User>[]>>(this.url, { headers: { 'Authorization': this.session.token } }).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  update(id: string): Observable<string> {
    return this.http.put<Rspn<string>>(this.url + '/' + id, { headers: { 'Authorization': this.session.token } }).pipe(
      map(x => validate(x))
    );
  }

}
