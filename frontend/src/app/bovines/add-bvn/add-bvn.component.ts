import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, of } from 'rxjs';
import { Bovino, TYPE_BOVINO } from '../../shared/models/bovine.model';
import { BovinesService } from '../services/bovines.service';
import { snackError, snackOk } from '../../util/snackbar-util';
import { MatSnackBar } from '@angular/material';
import { finalize, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-bvn',
  templateUrl: './add-bvn.component.html',
  styleUrls: ['./add-bvn.component.scss']
})
export class AddBvnComponent implements OnInit {
  @ViewChild('fileInput') input: ElementRef;
  img: string;

  loading = false;
  origin: Subject<string> = new Subject();

  reader: FileReader;

  birthDate: Date;
  buyDate: Date;
  desteteDate: Date;

  item: Bovino = {
    celos: [],
    codigo: '',
    color: '',
    destete: false,
    finca: '',
    genero: '',
    nombre: '',
    peso: 0,
    procedencia: '',
    proposito: '',
    raza: '',
    retirado: false,
    type: TYPE_BOVINO,
    tipo: TYPE_BOVINO
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: BovinesService, private snack: MatSnackBar) {
    this.reader = new FileReader();
  }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    if (this.birthDate) { this.item.fechaNacimiento = this.birthDate; }
    if (this.desteteDate) { this.item.fechaNacimiento = this.desteteDate; }
    if (this.buyDate) { this.item.fechaNacimiento = this.buyDate; }
    this.loading = true;
    this.service.add(this.item).pipe(
      mergeMap(x => this.img ? this.service.uploadImg(x, this.img) : of(this.img)),
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Bovino Agregado');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));
  }

  imgSelected(input: any) {
    const file = input.target.files[0];
    this.reader.readAsDataURL(file);
    this.reader.onload = (event: any) => {
      this.img = event.target.result;
    };
  }


}
