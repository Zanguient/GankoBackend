import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Aforo } from '../../../shared/models/meadow.model';

@Component({
  selector: 'app-add-gauging',
  templateUrl: './add-gauging.component.html',
  styleUrls: ['./add-gauging.component.scss']
})
export class AddGaugingComponent implements OnInit {

  aforo: Aforo;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {

  }

}
