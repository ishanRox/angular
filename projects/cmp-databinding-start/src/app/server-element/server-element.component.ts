import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('ishanElement') element: { type: string, name: string, content: string };
  @Input()name:string;
  
  constructor() {
    console.log('constructor called');

  }

  ngOnInit(): void {
    console.log('ngOnInit called');

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    

  }
}
