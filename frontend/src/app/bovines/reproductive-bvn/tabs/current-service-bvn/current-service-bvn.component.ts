import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { from, Observable, of } from 'rxjs';
import { filter, finalize, first, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { Bovino, Servicio, Diagnostico, Novedad, Parto } from '../../../../shared/models/bovine.model';
import { snackError, snackOk } from '../../../../util/snackbar-util';
import { BovinesService } from '../../../services/bovines.service';
import { DIALOG_BIRTH, DIALOG_DIAGNOSTIC, DIALOG_NOVELTY, NoveltyDialogComponent } from '../../novelty-dialog/novelty-dialog.component';

@Component({
  selector: 'app-current-service-bvn',
  templateUrl: './current-service-bvn.component.html',
  styleUrls: ['./current-service-bvn.component.scss']
})
export class CurrentServiceBvnComponent implements OnInit {

  bvn: Bovino;
  item: Servicio;

  straw = false;
  loading = false;

  constructor(private service: BovinesService, private dialog: MatDialog, private snack: MatSnackBar) {
    service.selected('').pipe(
      tap(x => this.bvn = x),
      mergeMap(x => from(x.servicios ? x.servicios : [])),
      filter(x => !x.finalizado),
      toArray()
    ).subscribe(x => {
      if (x.length > 0) {
        this.item = x[0];
        this.straw = this.item.empadre !== 'Monta Natural';
      }
    });
  }

  ngOnInit() {
  }

  goToAddDiagnostic() {
    this.openDialog(DIALOG_DIAGNOSTIC).pipe(
      map(x => ({ confirmacion: x.confirmed, fecha: new Date(x.date) }) as Diagnostico),
      map(x => this.prepareDiagnostic(JSON.parse(JSON.stringify(this.item)), x)),
      mergeMap(x => this.service.addDiagnostic(this.bvn.id, x).pipe(
        finalize(() => this.loading = false)
      ))
    )
      .subscribe(x => {
        this.prepareDiagnostic(this.item, x);
        if (this.item.finalizado) { snackError(this.snack, 'Servicio finalizado'); }
      });
  }

  prepareDiagnostic(srv: Servicio, diagnostic: Diagnostico) {
    srv.diagnostico = diagnostic;
    srv.posFechaParto = diagnostic.confirmacion ? new Date(this.item.fecha.getTime() + 24624000000) : undefined;
    srv.finalizado = !diagnostic.confirmacion;
    return srv;
  }

  goToAddNovelty() {
    this.openDialog(DIALOG_NOVELTY).pipe(
      map(x => ({ fecha: new Date(x.date), novedad: x.novelty } as Novedad)),
      map(x => this.prepareNovelty(JSON.parse(JSON.stringify(this.item)), x)),
      mergeMap(x => this.service.addNovelty(this.bvn.id, x).pipe(
        finalize(() => this.loading = false)
      ))
    )
      .subscribe(x => {
        this.prepareNovelty(this.item, x);
        snackError(this.snack, 'Servicio finalizado');
      });
  }

  prepareNovelty(srv: Servicio, novelty: Novedad) {
    srv.novedad = novelty;
    srv.finalizado = true;
    return srv;
  }

  goToAddBirth() {
    this.openDialog(DIALOG_BIRTH).pipe(
      mergeMap(x => this.calculateEmptyDays(this.item.fecha.getTime(), x)),
      mergeMap(x => this.calculateInterval(x)),
      map(x => ({
        fecha: new Date(x.data.date), diasVacios: x.days, estadoCria: x.data.state,
        intervalo: x.interval, sexoCria: x.data.sex, numero: this.bvn.partos ? this.bvn.partos + 1 : 1
      }) as Parto),
      map(x => this.prepareBirth(JSON.parse(JSON.stringify(this.item)), x)),
      mergeMap(x => this.service.addBirth(this.bvn.id, x).pipe(
        finalize(() => this.loading = false)
      ))
    )
      .subscribe(x => {
        this.prepareBirth(this.item, x);
        this.bvn.partos = x.numero;
        snackOk(this.snack, 'Servicio finalizado');
      });
  }

  prepareBirth(srv: Servicio, x: Parto) {
    srv.parto = x;
    srv.finalizado = true;
    return srv;
  }

  openDialog(type: number): Observable<any> {
    return this.dialog.open(NoveltyDialogComponent, {
      width: '300px',
      data: { type: type },
      autoFocus: false
    })
      .afterClosed().pipe(
        filter(x => x !== undefined),
        tap(() => this.loading = true)
      );
  }

  calculateEmptyDays(serviceTime: number, data: any): Observable<{ last: number, days: number, data: any }> {
    return from(this.bvn.servicios).pipe(
      filter(x => x.parto != null),
      map(x => x.parto.fecha.getTime()),
      first(x => x > 0, 0),
      map(x => {
        if (x === 0) {
          return { last: 0, days: 0, data: data };
        } else {
          let dif = serviceTime - x;
          dif = dif - (dif % 86400000);
          return ({ last: x, days: dif / 86400000, data: data });
        }
      })
    );
  }

  calculateInterval(info: { last: number, days: number, data: any }): Observable<{ interval: number, days: number, data: any }> {
    const birthDate = new Date(info.data.date).getTime();
    return of(info.last).pipe(
      map(x => {
        if (x === 0) {
          return { interval: 0, days: 0, data: info.data };
        } else {
          let dif = birthDate - x;
          dif = dif - (dif % 86400000);
          return { interval: dif / 86400000, days: info.days, data: info.data };
        }
      })
    );
  }

}
