import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {

  @Input() accent: boolean;
  @Input() align: string;

  constructor() { }

  ngOnInit() {
  }

}
