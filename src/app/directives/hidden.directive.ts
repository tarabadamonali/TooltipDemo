import { Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[display]'
})
export class HiddenDirective {
  
  constructor(private Element:ElementRef){}
  hideElement(Element:ElementRef){
    console.log("Inside method hideElement");
    Element.nativeElement.style.visibility='hidden';
  }
  displayElement(Element:ElementRef){
    console.log("Inside method displayElement");
    Element.nativeElement.style.visibility='visible';
  }
}
