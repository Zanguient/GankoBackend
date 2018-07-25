import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appAccent]'
})
export class AccentDirective implements OnInit {

  @Input() appAccent: boolean = undefined;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    if (this.appAccent === false) {
      return;
    }

    this.el.nativeElement.style.color = '#009999';
  }

}
