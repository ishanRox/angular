import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName: string = "not available Now";
  currentServerName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  //assignment
  toggleFlag: boolean = false;
  counterArray = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverName = "Server started and running !";

  }
  onUpdateServerName(event: Event) {
    this.currentServerName = (<HTMLInputElement>event.target).value;
  }


  onToggleFlag() {
    console.log("toggled");
    this.counterArray.push(new Date());
    this.toggleFlag = !this.toggleFlag;

  }
}
