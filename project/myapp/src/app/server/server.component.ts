import { Component } from "@angular/core";



@Component(
    {
        selector: 'app-server',
        templateUrl: './server.component.html',
        styles: [
            `.online{color:white;}`
        ]
    }
)
export class ServerComponent {
    serverId: number = Math.random();
    serverStatus: string = "offline";
    color = "";
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.realtimeColor();
    }

    realtimeColor() {
        setInterval(() => {
            this.color = (Math.random() > 0.5) ? 'red' : 'green'
        }, 2000);
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    getServerStatus() {
        return this.serverStatus + " of this server checked by a method and -";
    }
}