import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

    @Input() big = false;
    @Input() align = 'start';

    diameter = 40;
    stroke = 3;

    ngOnInit() {
        if (this.big) {
            this.diameter = 60;
        }
    }

}
