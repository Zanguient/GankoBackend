import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() subAccent = false;
  @Input() removable: boolean;
  @Input() clickable: boolean;
  @Input() index: number;
  @Output() removeCard: EventEmitter<number> = new EventEmitter();
  @Output() clickCard: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.removeCard.emit(this.index);
  }

  clickItem() {
    this.clickCard.emit(this.index);
  }

}
