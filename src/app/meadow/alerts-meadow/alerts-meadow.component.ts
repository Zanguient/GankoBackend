import { Component, OnInit } from '@angular/core';
import { Pradera } from '../../shared/models/meadow.model';
import { MeadowService } from '../services/meadow.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { mergeMap } from '../../../../node_modules/rxjs/operators';
import { snackError } from '../../util/snackbar-util';
import { MeadowAlarm } from '../../shared/models/meadowAlarm.model';

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

  constructor(private service: MeadowService, private route: ActivatedRoute, private snack: MatSnackBar, private router: Router) {
    this.loading = true;
    route.paramMap.pipe(
      mergeMap(x => service.selected(x.get('id')))
    ).subscribe(x => {
      service.select(x);
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
