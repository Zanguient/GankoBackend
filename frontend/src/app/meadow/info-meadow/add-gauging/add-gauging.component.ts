import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Aforo, Pradera } from '../../../shared/models/meadow.model';
import { MatDialog, MatSnackBar } from '../../../../../node_modules/@angular/material';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { MeadowService } from '../../services/meadow.service';
import { mergeMap } from '../../../../../node_modules/rxjs/operators';
import { snackError, snackOk } from '../../../util/snackbar-util';

@Component({
  selector: 'app-add-gauging',
  templateUrl: './add-gauging.component.html',
  styleUrls: ['./add-gauging.component.scss']
})
export class AddGaugingComponent implements OnInit {

  aforo: Aforo = new Aforo();
  muestras: number;
  viewBtnMuestras: boolean;
  item: Pradera;
  loading: boolean;

  constructor(private service: MeadowService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog,
    private snack: MatSnackBar) {
    this.aforo.valores = [];
    this.loading = true;
    route.paramMap.pipe(
      mergeMap(x => service.selected(x.get('id')))
    ).subscribe(x => {
      service.select(x);
      this.item = x;
      this.loading = false;
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

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  add() {
    let sum = 0;
    for (const val of this.aforo.valores) {
      sum = sum + val;
    }
    this.aforo.promedio = sum / this.aforo.valores.length;
    this.aforo.total = this.aforo.promedio * this.item.tamano;
    if (this.item.tamanoEnHectareas) {
      this.aforo.total = this.aforo.total * 10000;
    }
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      data: { aforo: this.aforo },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(rsp => {
      this.saveAforo();
    }, err => snackError(this.snack, err));
  }

  saveAforo() {
    this.loading = true;
    this.aforo.fechaAforo = new Date();
    this.item.aforo.push(this.aforo);
    this.service.update(this.item).subscribe(rsp => {
      snackOk(this.snack, 'Se almaceno la informacion correctamente');
      this.cancel();
    },
      err => {
        snackError(this.snack, err);
        this.loading = false;
      });
  }

  generateArrayValores() {
    this.viewBtnMuestras = !this.viewBtnMuestras;
    if (this.viewBtnMuestras) {
      for (let i = 0; i < this.muestras; i++) {
        this.aforo.valores.push(null);
      }
    } else {
      this.aforo.valores = [];
      this.muestras = null;
    }
  }

}
