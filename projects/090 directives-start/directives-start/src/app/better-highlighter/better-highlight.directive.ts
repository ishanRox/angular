import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //To make parent be able to access these values
  @Input() defaultColor: string = 'transparent';
  @Input("appBetterHighlight") highlightColor: string = 'blue';
  //we say to angular get the style property and then from that get the backgroundColor sub property
  //and we can easily manipulate that property
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  ngOnInit() {
    //we add this because to initialize the color it not work if we put in Hostbinding itself(initialize in hostbinding)
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
