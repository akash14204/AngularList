import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color:string="red"; 
  
  constructor(private element:ElementRef) {}
  
  @HostListener('mouseenter')
  addHighlight(){   
   this.element.nativeElement.style.background=this.color;
  }

}
