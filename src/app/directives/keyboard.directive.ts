import { ElementRef, Directive, Inject, HostListener, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[esckeypress]'
})
export class KeyboardDirective{

  @ViewChild('btn1') btn1: ElementRef;
  constructor(@Inject(DOCUMENT) private document,private Element: ElementRef) {
    console.log("element = " + Element);
   }
   @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { // keycode-27===ESC     
      this.Element.nativeElement.style.visibility='hidden';
    }
  }
}