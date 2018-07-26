import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-bvn',
  templateUrl: './add-bvn.component.html',
  styleUrls: ['./add-bvn.component.scss']
})
export class AddBvnComponent implements OnInit {

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
