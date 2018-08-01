import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNoSpace]'
})
export class NoSpaceDirective {

  @Input() appNoSpace: string;

  constructor(private em: ElementRef) {
    if (this.appNoSpace) {
      const sides = this.appNoSpace.split(' ');

      sides.forEach(x => {
        this.noSpaces(x);
      });
      return;
    }

    this.noSpaces('b');

  }

  noSpaces(value: string) {
    switch (value) {
      case 't': this.em.nativeElement.style.marginTop = '0px'; break;
      case 'b': this.em.nativeElement.style.marginBottom = '0px'; break;
      case 'l': this.em.nativeElement.style.marginLeft = '0px'; break;
      case 'r': this.em.nativeElement.style.marginRigth = '0px'; break;
    }
  }

}
