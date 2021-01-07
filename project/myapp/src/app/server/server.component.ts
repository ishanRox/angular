import { Component } from "@angular/core";


@Component(
    {
        selector: 'app-server',
        templateUrl: './server.component.html'
    }
)
export class ServerComponent {
    serverId: number = Math.random();
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus + " of this server checked by a method and -";
    }
}