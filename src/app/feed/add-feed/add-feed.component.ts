import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styles: []
})
export class AddFeedComponent implements OnInit {

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
