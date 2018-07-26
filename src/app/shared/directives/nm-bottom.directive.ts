import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNmBottom]'
})
export class NmBottomDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.marginBottom = '0px';
  }

}
