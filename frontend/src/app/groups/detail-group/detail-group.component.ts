import { Component, OnInit } from '@angular/core';
import { Group } from '../../shared/models/group.model';
import { GroupsService } from '../service/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { mergeMap, tap, finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { snackError } from '../../util/snackbar-util';
import { SelectedBvnService } from 'src/app/core/services/selected-bvn.service';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {

  item: Group;
  loading: boolean;

  constructor(private service: GroupsService, private router: Router, private route: ActivatedRoute,
    private snack: MatSnackBar, private selected: SelectedBvnService) {

  }

  goToBovines() {
    this.selected.path = ['Grupos', this.item.nombre];
    this.selected.lastPath = 'Bovinos';
    this.router.navigate(['bovinos'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.pipe(
      mergeMap(x => this.service.selected(x.get('id'))),
      tap(() => this.loading = false, () => this.loading = false)
    ).subscribe(x => this.item = x, err => snackError(this.snack, err));
  }

  getHexColor() {
    const bbggrr = ('000000' + this.item.color.toString(16)).slice(-6);
    const rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return '#' + rrggbb;
  }

}
