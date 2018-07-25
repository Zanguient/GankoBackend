import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-loader',
  templateUrl: './list-loader.component.html',
  styleUrls: ['./list-loader.component.scss']
})
export class ListLoaderComponent {

  @Input() loading: boolean;
  @Input() size: number;
  @Input() noData: string;
  @Input() addonable = true;
  @Output() add: EventEmitter<number> = new EventEmitter();

  constructor() { }

  onClickAdd() {
    this.add.emit(0);
  }

}
