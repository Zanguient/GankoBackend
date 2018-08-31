import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { MeadowAlarm } from '../../../shared/models/meadowAlarm.model';
import { Pradera } from '../../../shared/models/meadow.model';
import { mergeMap } from 'rxjs/operators';
import { snackError, snackOk } from '../../../util/snackbar-util';
import { MeadowService } from '../../services/meadow.service';
import { MatSnackBar } from '@angular/material';
import { MeadowAlarmService } from '../../services/meadowAlarm.service';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.scss']
})
export class AddAlertComponent implements OnInit {

  alertMeadow: MeadowAlarm = new MeadowAlarm();
  valor: number;
  tiempo: string;
  item: Pradera;
  loading: boolean;

  constructor(private serviceMeadow: MeadowService, private service: MeadowAlarmService, private router: Router,
    private route: ActivatedRoute, private snack: MatSnackBar) {
    this.loadMeadow();
  }

  loadMeadow() {
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

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    let time: number;
    switch (this.tiempo) {
      case 'Hora(s)':
        time = this.valor;
        break;
      case 'Dia(s)':
        time = this.valor * 24;
        break;
      case 'Mes(es)':
        time = this.valor * 24 * 30;
        break;
      default:
        time = this.valor * 24 * 30 * 12;
        break;
    }

    let desc: string;
    switch (this.alertMeadow.tipo) {
      case 'Ocupacion':
        desc = 'La pradera ' + this.item.identificador + ' ya puede ser ocupada';
        break;
      case 'Descanso':
        desc = 'La pradera ' + this.item.identificador + ' ya debe ser desocupada';
        break;
      default:
        desc = 'La pradera ' + this.item.identificador + ' debe ser fertilizada';
        break;
    }

    const calendar = new Date();
    calendar.setTime(new Date().getTime() + (time * 3600000));

    const date = calendar.getDate() + '/' + (calendar.getMonth() + 1) + '/' + calendar.getFullYear();

    this.alertMeadow.id = null;
    this.alertMeadow.sequence = null;
    this.alertMeadow.type = null;
    this.alertMeadow.meadow = this.item.id;
    this.alertMeadow.title = 'Acciones pendientes en la pradera ' + this.item.identificador;
    this.alertMeadow.description = desc;
    this.alertMeadow.wasShowed = false;
    this.alertMeadow.fechaProxima = calendar;

    this.service.add(this.alertMeadow).subscribe(rsp => {
      snackOk(this.snack, 'Se guardo correctamente');
      this.cancel();
    }, err => snackError(this.snack, err));
  }

}
