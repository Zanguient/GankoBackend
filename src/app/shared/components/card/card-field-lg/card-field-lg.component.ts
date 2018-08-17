import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-field-lg',
  templateUrl: './card-field-lg.component.html',
  styleUrls: ['./card-field-lg.component.scss']
})
export class CardFieldLgComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
