import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';
//import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './access/register/register.component';
import { AppRoutingModule } from './app-routiung.module';
import { RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//import { AccessRoutingModule } from './access/access-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    AddContactComponent,


  ],
  imports: [
    BrowserModule,
    //LoginComponent,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,


    //AccessRoutingModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
