import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { finalize, mergeMap } from 'rxjs/operators';
import { Manejo } from '../../shared/models/manage.model';
import { snackError } from '../../util/snackbar-util';
import { BovinesService } from '../services/bovines.service';

@Component({
  selector: 'app-manage-bvn',
  templateUrl: './manage-bvn.component.html',
  styleUrls: ['./manage-bvn.component.scss']
})
export class ManageBvnComponent {

  data: Manejo[] = [];
  loading = false;

  constructor(private service: BovinesService, private snack: MatSnackBar) {

    this.loading = true;
    this.service.selected('').pipe(
      mergeMap(x => this.service.listManage(x.id)),
      finalize(() => this.loading = false)
    ).subscribe(x => this.data = x, err => snackError(this.snack, err));

  }

}
