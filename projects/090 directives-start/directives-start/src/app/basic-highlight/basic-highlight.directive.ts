import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighLightDirective implements OnInit{
//get the acces of element that this attribute sits on
//we can do this by requsting element reference in constructor
constructor(private elementRef:ElementRef) {
}

ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='green';
}
}