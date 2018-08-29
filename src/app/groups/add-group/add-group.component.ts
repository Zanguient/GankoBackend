import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';
import { Group } from '../../shared/models/group.model';
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
    nombre: ''
  };
  color = '#000000';



  constructor(private router: Router, private route: ActivatedRoute, public selected: SelectedBvnService,
    private service: GroupsService, private snack: MatSnackBar) { }

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

    this.service.add(this.item).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      snackOk(this.snack, 'Grupo Creado');
      this.router.navigate(['../'], { relativeTo: this.route });
    }, err => snackError(this.snack, err));

  }

}
