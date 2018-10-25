import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';
import { Group, TYPE_GRUPO } from '../../shared/models/group.model';
import { GroupsService } from '../service/groups.service';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { snackOk, snackError } from '../../util/snackbar-util';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  loading = false;
  item: Group = {
    bovines: [],
    color: 0,
    finca: '',
    nombre: '',
    pradera: '',
    type: TYPE_GRUPO
  };
  color = '#000000';

  edit = false;
  loadingEdit = false;

  constructor(private router: Router, private route: ActivatedRoute, public selected: SelectedBvnService,
    private service: GroupsService, private snack: MatSnackBar) {
    const id = this.route.snapshot.paramMap.get('id');
    this.edit = id ? true : false;
    if (this.edit) {
      this.loadingEdit = true;
      this.service.selected(id).pipe(
        finalize(() => this.loadingEdit = false)
      ).subscribe(x => {
        this.item = x;
        this.color = this.getHexColor();
      }, err => snackError(this.snack, err));
    }
  }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {
    this.loading = true;
    const r = parseInt(this.color.substr(1, 2), 16);
    const g = parseInt(this.color.substr(3, 2), 16);
    const b = parseInt(this.color.substr(5, 2), 16);
    const c = b * 65536 + g * 256 + r;
    this.item.color = c;
    this.item.bovines = this.selected.selecteds;

    (this.edit ? this.service.update(this.item) : this.service.add(this.item)).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, this.edit ? 'Grupo Actualizado' : 'Grupo Creado');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));

  }

  getHexColor() {
    const bbggrr = ('000000' + this.item.color.toString(16)).slice(-6);
    const rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return '#' + rrggbb;
  }

}
