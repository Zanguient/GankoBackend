import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-vaccines',
  templateUrl: './add-vaccines.component.html',
  styleUrls: ['./add-vaccines.component.scss']
})
export class AddVaccinesComponent implements OnInit {

  loading = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  add() {

  }

}
