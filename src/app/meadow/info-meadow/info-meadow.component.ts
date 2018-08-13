import { Component, OnInit, ViewChild } from '@angular/core';
import { Pradera } from '../../shared/models/meadow.model';
import { MeadowService } from '../services/meadow.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from '../../../../node_modules/rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';
import { MatSnackBar, MatTable } from '@angular/material';

@Component({
  selector: 'app-info-meadow',
  templateUrl: './info-meadow.component.html',
  styleUrls: ['./info-meadow.component.scss']
})
export class InfoMeadowComponent implements OnInit {

  item: Pradera;
  loading: boolean;
  @ViewChild('tableMant') tableL: MatTable<Pradera[]>;
  columnasMant = ['dateMant', 'total'];
  columnasAforo = ['dateAforo', 'value'];

  constructor(private service: MeadowService, route: ActivatedRoute, private snack: MatSnackBar) {
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

    service.selected('').subscribe(x => this.item = x);
  }

  ngOnInit() {
  }

  updateInfo() {
    this.service.update(this.item).subscribe(x => snackOk(this.snack, 'Se actualizo correctamente la información'),
      err => snackError(this.snack, err));
  }

}
