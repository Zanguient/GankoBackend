import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Alimentacion, TYPE_ALIMENTACION } from '../../shared/models/feed.model';
import { MatSnackBar } from '@angular/material';
import { FeedService } from '../services/feed.service';
import { finalize } from 'rxjs/operators';
import { snackError, snackOk } from '../../util/snackbar-util';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styles: []
})
export class AddFeedComponent implements OnInit {

  loading = false;

  date: string;

  item: Alimentacion = {
    tipoAlimento: '',
    peso: 0,
    valorkg: 0,
    valorTotal: 0,
    bovinos: [],
    type: TYPE_ALIMENTACION
  };

  constructor(private router: Router, private route: ActivatedRoute, private snack: MatSnackBar, private service: FeedService,
    public selected: SelectedBvnService) { }

  ngOnInit() {
  }

  goToBack() {
    this.selected.clear();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    if (this.date) { this.item.fecha = new Date(this.date); }
    this.loading = true;
    this.service.add(this.item).pipe(
      finalize(() => {
        this.loading = false;
        this.selected.clear();
      })
    ).subscribe(() => {
      snackOk(this.snack, 'Alimentación Agregada');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));

  }

}
