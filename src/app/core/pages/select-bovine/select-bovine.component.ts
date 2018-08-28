import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Bovino } from '../../../shared/models/bovine.model';
import { snackError } from '../../../util/snackbar-util';
import { NavService } from '../../services/nav.service';
import { BovineSelected, SelectedBvnService } from '../../services/selected-bvn.service';
import { ClearDialogComponent } from './clear-dialog/clear-dialog.component';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-select-bovine',
  templateUrl: './select-bovine.component.html',
  styleUrls: ['./select-bovine.component.scss']
})
export class SelectBovineComponent implements OnInit, OnDestroy {

  isHandset: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
    map(result => result.matches)
  );

  data: BovineSelected[] = [];
  selectedsList: Bovino[] = [];

  selecteds: any = {};
  count = 0;

  constructor(public service: SelectedBvnService, private breakpointObserver: BreakpointObserver, public nav: NavService,
    private snack: MatSnackBar, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    nav.title = 'Seleccionar Bovinos';
    nav.searchable = true;
    nav.filterable = true;
    nav.showRetired = false;

    this.service.list()
      .subscribe(x => {
        this.data = x;
      }, err => snackError(this.snack, err));
  }

  next() {
    if (this.selectedsList.length === 0) {
      snackError(this.snack, 'Debes seleccionar al menos un bovino');
    } else {
      this.service.selecteds = Object.keys(this.selecteds);
      this.router.navigate(this.nav.nextNavigation, { relativeTo: this.route });
    }
  }

  select(index: number) {
    const selected = !this.data[index].selected;
    if (selected) {
      this.count += 1;
      this.selecteds[this.data[index].bvn.id] = selected;
      this.selectedsList.push(this.data[index].bvn);
    } else {
      this.count -= 1;
      delete this.selecteds[this.data[index].bvn.id];
      const idSelected = this.data[index].bvn.id;
      const sIndex = this.selectedsList.findIndex(x => x.id === idSelected);
      if (sIndex >= 0) { this.selectedsList.splice(sIndex, 1); }
    }

    this.data[index].selected = selected;
  }

  removeSelected(index: number) {
    this.count -= 1;
    const deletedId = this.selectedsList.splice(index, 1)[0].id;
    delete this.selecteds[deletedId];

    const sIndex = this.data.findIndex(x => x.bvn.id === deletedId);
    if (sIndex >= 0) { this.data[sIndex].selected = false; }
  }

  selectAll() {
    this.data.forEach((x, i) => {
      if (!x.selected) {
        this.count += 1;
        this.selecteds[x.bvn.id] = true;
        this.selectedsList.push(x.bvn);
        x.selected = true;
      }
    });
  }

  clearAll() {
    this.dialog.open(ClearDialogComponent, {
      width: '300px',
      data: {},
      autoFocus: false
    })
      .afterClosed().pipe(
        filter(x => x !== undefined)
      )
      .subscribe(x => {
        this.selectedsList = [];
        this.selecteds = {};
        this.data.forEach(bvn => bvn.selected = false);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.nav.searchable = false;
    this.nav.filterable = false;
    this.nav.showRetired = true;
  }

}

