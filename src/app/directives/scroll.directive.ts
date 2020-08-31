import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {

  constructor(@Inject(DOCUMENT) private document: Document, private Element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 330) {
      document.getElementById('tooltiptext1').classList.add('scrltooltip');
      document.getElementById('tooltiptext2').classList.add('scrltooltip');
      console.log('top' + document.getElementById('tooltiptext1').classList);
    }
    if (number < 330) {
      document.getElementById('tooltiptext1').classList.remove('scrltooltip');
      document.getElementById('tooltiptext2').classList.remove('scrltooltip');
    }
  }
}