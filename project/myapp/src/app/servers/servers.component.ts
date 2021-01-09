import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName: string = "not available Now";
  currentServerName = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverName = "Server started and running !";
  }
  onUpdateServerName(event: Event) {
    this.currentServerName = (<HTMLInputElement>event.target).value;
  }
}
