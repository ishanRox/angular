import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

})
export class ServerElementComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input('ishanElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph')child:ElementRef;
  constructor() {
    console.log('constructor called');

  }
  ngOnInit(): void {
    console.log('___________________________________');
    console.log('ngOnInit called');
    console.log("textContent :" + this.header.nativeElement.textContent);
    console.log('___________________________________');

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit() {
    console.log('__________________ngAfterContentInit______________________________');
    console.log("@ViewChild : " + this.header.nativeElement.textContent);
    console.log("@ContentChild : "+this.child.nativeElement.textContent);
    console.log('ngAfterContentInit called');
    console.log('__________________ngAfterContentInit______________________________');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('_______________ngAfterViewInit____________________');
    console.log('ngAfterViewInit called');
    console.log("@ViewChild : " + this.header.nativeElement.textContent);
    console.log("@ContentChild : "+this.child.nativeElement.textContent);
    
    console.log('_______________ngAfterViewInit____________________');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');

  }
}
