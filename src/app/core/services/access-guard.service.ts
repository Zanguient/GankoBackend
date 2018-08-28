import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  constructor(private session: SessionService, private router: Router) { }

  canActivate(): boolean {

      // if (this.session.logged) {
      //     return true;
      // }

      // this.router.navigate(['login']);

      return true;
  }
}
