import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { snackError } from '../../util/snackbar-util';
import { MeadowAlarm } from '../../shared/models/meadowAlarm.model';
import { MeadowAlarmService } from '../services/meadowAlarm.service';
import { MeadowService } from '../services/meadow.service';
import { mergeMap } from 'rxjs/operators';
import { Pradera } from '../../shared/models/meadow.model';

@Component({
  selector: 'app-alerts-meadow',
  templateUrl: './alerts-meadow.component.html',
  styleUrls: ['./alerts-meadow.component.scss']
})
export class AlertsMeadowComponent implements OnInit {

  item: Pradera;
  data: MeadowAlarm[] = [];
  loading = false;
  columnasAlert: string[] = ['type', 'date'];

  constructor(private service: MeadowAlarmService, private serviceMeadow: MeadowService, private route: ActivatedRoute,
    private snack: MatSnackBar, private router: Router) {
    this.loadPradera();
    this.loading = true;
    if (this.service.idPradera === undefined) {
      this.service.idPradera = this.serviceMeadow.idPradera;
    }
    service.list().subscribe(x => {
      this.data = x;
      console.log(Object.values(x));
      this.loading = false;
    }, err => {
      snackError(this.snack, err);
      this.loading = false;
    });
  }

  loadPradera() {
    this.loading = true;
    this.route.paramMap.pipe(
      mergeMap(x => this.serviceMeadow.selected(x.get('id')))
    ).subscribe(x => {
      this.serviceMeadow.select(x);
      this.item = x;
    }, err => {
      snackError(this.snack, err);
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  goToAdd() {
    this.router.navigate(['agregar'], { relativeTo: this.route });
  }

}
