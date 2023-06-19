import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { ContactComponent } from "./contact/contact.component";
import { authGuard } from "./Guard/auth.guard";
import { HomeComponent } from "./home/home.component";
import { StatusComponent } from "./status/status.component";

const routes: Routes = [
    { path: "home", component: HomeComponent, canActivate: [authGuard] },
    { path: "about", component: AboutComponent },
    {
        path: "contact", component: ContactComponent,
        children: [{ path: "add", component: AddContactComponent }
            , { path: "edit/:id", component: AddContactComponent },
        ],

    },
    {
        path: "access", loadChildren: () => import("./access/access.module").then(opt => opt.AccessModule)
    },
    {
        path: "login", loadComponent: () => import("./login/login.component").then(opt => opt.LoginComponent)
    },
    {
        path: "**", component: StatusComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
