import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appWarn]'
})
export class WarnDirective implements OnInit {

  @Input() appWarn;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.appWarn === false) {
      return;
    }

    this.el.nativeElement.style.color = '#6C0000';
  }
}
