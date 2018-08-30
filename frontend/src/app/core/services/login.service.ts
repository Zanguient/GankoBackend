import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Rspn } from '../../shared/models/response.model';
import { validate } from '../../util/http-util';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = `${environment.urlBase}/user/login`;

  constructor(private http: HttpClient, private session: SessionService) { }

  login(username: string, pass: string) {
    return this.http.post<Rspn<LoginResponse>>(`${this.url}user/login`, {
      username: username,
      pass: pass
    }, {}).pipe(
      map(x => validate(x)),
      map(x => {
        this.session.id = x.user;
        this.session.token = x.token;
        return x;
      })
    );

  }
}

export class LoginResponse {
  user: string;
  token: string;
}
