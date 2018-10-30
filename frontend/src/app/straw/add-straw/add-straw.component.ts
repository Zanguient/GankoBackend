import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Straw, TYPE_PAJILLA } from '../../shared/models/straw.model';
import { MatSnackBar } from '@angular/material';
import { StrawService } from '../services/straw.service';
import { finalize } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';


@Component({
  selector: 'app-add-straw',
  templateUrl: './add-straw.component.html',
  styleUrls: ['./add-straw.component.scss']
})
export class AddStrawComponent implements OnInit {

  loading = false;

  item: Straw = { 
    idStraw: '',
    layette: '',
    breed: '',
    purpose: '',
    origin: '',
    value: '',
    bull: '',
    type: TYPE_PAJILLA
  }

  constructor(private router: Router, private route: ActivatedRoute, private snack: MatSnackBar, private service: StrawService) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Pajilla Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));
  }

}
