import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Rspn, Doc } from '../../shared/models/response.model';
import { validate, toDoc } from '../../util/http-util';
import { SessionService } from './session.service';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = `${environment.urlBase}/user/login`;

  constructor(private http: HttpClient, private session: SessionService) { }

  login(username: string, pass: string) {
    return this.http.post<Rspn<LoginResponse>>(this.url, {
      username: username,
      pass: pass
    }, {}).pipe(
      map(x => validate(x)),
      map(x => {
        const { id, doc } = x.user;

        this.session.id = id;
        this.session.token = x.token;
        this.session.plan = doc.plan;
        this.session.role = doc.rol;
        this.session.planDate = doc.ultimoPago ? new Date(doc.ultimoPago) : new Date();
        return x;
      })
    );

  }
}

export class LoginResponse {
  user: Doc<User>;
  token: string;
}
