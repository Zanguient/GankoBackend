import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { NavService } from './nav.service';
import { SelectedBvnService } from './selected-bvn.service';

@Injectable({
    providedIn: 'root'
})
export class AccessSelectedService implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute, private service: SelectedBvnService) { }

    canActivate(): boolean {

        if (this.service.selecteds != null && this.service.selecteds.length > 0) {
            return true;
        }

        this.router.navigate(['../'], { relativeTo: this.route });

        return false;
    }
}
