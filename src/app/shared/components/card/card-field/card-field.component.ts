import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-field',
  templateUrl: './card-field.component.html',
  styleUrls: ['./card-field.component.scss']
})
export class CardFieldComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
