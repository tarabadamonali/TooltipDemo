import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HiddenDirective } from '../directives/hidden.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  showtooltiptext1;
  showtooltiptext2;
  
  @ViewChild('btn1') btn1: ElementRef;
  @ViewChild('btn2') btn2: ElementRef;
  @ViewChild('tooltiptext1') tooltiptext1: ElementRef;
  @ViewChild('tooltiptext2') tooltiptext2: ElementRef;
  @ViewChild(HiddenDirective) directive = null

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickButton1(){
    console.log("Inside method onClickButton1");    
    this.directive.displayElement(this.tooltiptext1);
    this.directive.hideElement(this.tooltiptext2);
  }
  onClickButton2(){
    console.log("Inside method OnClickButton2");
    this.directive.displayElement(this.tooltiptext2);
    this.directive.hideElement(this.tooltiptext1);
  }
  onClickedOutside(event:Event){
    console.log("Inside method onClickedOutside" + event.target);
    if((event.target==this.btn1.nativeElement)||(event.target==this.tooltiptext1.nativeElement))
    {
      this.directive.displayElement(this.tooltiptext1);
      this.directive.hideElement(this.tooltiptext2);
      console.log("match");
    }
    else if((event.target==this.btn2.nativeElement)||(event.target==this.tooltiptext2.nativeElement))
    {
      this.directive.displayElement(this.tooltiptext2);
      this.directive.hideElement(this.tooltiptext1);
      console.log("match2");
    }
    else{
      this.directive.hideElement(this.tooltiptext1);
      this.directive.hideElement(this.tooltiptext2);
    }
  }  
}
