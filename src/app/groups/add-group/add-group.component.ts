import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedBvnService } from '../../core/services/selected-bvn.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, public selected: SelectedBvnService) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {

  }

}
