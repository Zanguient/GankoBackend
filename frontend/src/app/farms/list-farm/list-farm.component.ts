import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent } from '../../util/base-list-component';
import { Finca } from '../../shared/models/farm.model';
import { FarmsService } from '../services/farms.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-list-farm',
  templateUrl: './list-farm.component.html',
  styleUrls: ['./list-farm.component.scss']
})
export class ListFarmComponent extends BaseListComponent<Finca> {

  constructor(router: Router, route: ActivatedRoute, service: FarmsService,
    snackBar: MatSnackBar, dialog: MatDialog, private session: SessionService) {
    super(service, dialog, router, route, snackBar);
  }

  goToDash(farm: Finca) {
    this.session.farmId = farm.id;
    this.session.farmName = farm.nombre;
    this.router.navigate(['dashboard']);
  }

  goToEdit(farm: Finca) {
    this.service.select(farm);
    this.router.navigate([farm.id], { relativeTo: this.route });
  }

}
