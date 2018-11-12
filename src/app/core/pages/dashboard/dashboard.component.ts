import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { ROL_ADMIN, ROL_ASSISTANT, ROL_RANCHER } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  role: string;
  roles = [ROL_ADMIN, ROL_ASSISTANT, ROL_RANCHER];

  constructor(private breakpointObserver: BreakpointObserver, public nav: NavService, private router: Router,
    public session: SessionService) {
    this.role = session.role;
  }

  goToFarm() {
    this.router.navigate(['fincas']);
  }

  logout() {
    this.session.clear();
    this.router.navigate(['login']);
  }

}
