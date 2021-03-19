import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivatedGuard } from "./servers/edit-server/can-deactivate-guard-service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ":id/:name", component: UserComponent },
        ]
    },
    {
        path: "servers",
        // canActivate:[AuthGuard]
        canActivateChild: [AuthGuard]
        , component: ServersComponent, children: [
            { path: ":id", component: ServerComponent },
            { path: ":id/edit", component: EditServerComponent ,canDeactivate:[CanDeactivatedGuard]},
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    //wildcard to catch all undefined routes and redirect them to not-found
    //please remember that this need to be the final one becase
    // routes in this array parse from top to bottom
    { path: '**', redirectTo: '/not-found' },
];

//we add routers to appRoutes array and add that to RouterModule
//And Export that array to it
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}