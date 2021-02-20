import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
 
})
export class CockpitComponent implements OnInit {
  //properties to make event emitters which expect a generic typefor the emitter
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('blueButton') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
//just add local reference to this ViewChild and
  @ViewChild("serverContentInput") serverContentInput:ElementRef;
  @ViewChild("serverNameInput") serverNameInput:ElementRef;
  // newServerName = '';
  // newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  // onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent:contentInput.value 
  //   });
  // }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent:this.serverContentInput.nativeElement.value  
    });
  }
  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent:this.serverContentInput.nativeElement.value 
    });
  }
}
