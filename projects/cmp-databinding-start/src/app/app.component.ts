import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  serverElements = [{type:'server',name:'IshanTestServer',content:'just a test'}];
 @ViewChild('contentParagraph')child:ElementRef;
 
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name='changed'+Math.random();
  }

  destroyElement(){
    this.serverElements.splice(0,1);
  }

  ngAfterViewInit(){
    console.log('sdffffffffffff');
    
    console.log(this.child.nativeElement.textContent+" acces from app component");
    
  }
}
