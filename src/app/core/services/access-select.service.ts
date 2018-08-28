import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavService } from './nav.service';

@Injectable({
    providedIn: 'root'
})
export class AccessSelectService implements CanActivate {

    constructor(private router: Router, private nav: NavService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.nav.breadcrumb != null && this.nav.breadcrumb.length > 0) {
            return true;
        }
        this.router.navigate(['../']);
        return false;
    }
}
