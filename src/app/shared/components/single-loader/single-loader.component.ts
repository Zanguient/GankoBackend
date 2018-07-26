import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-loader',
  templateUrl: './single-loader.component.html',
  styleUrls: ['./single-loader.component.scss']
})
export class SingleLoaderComponent implements OnInit {

  @Input() loading: boolean;
  @Input() success: boolean;
  @Input() error: string;

  constructor() { }

  ngOnInit() {
  }

}
