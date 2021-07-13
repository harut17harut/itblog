import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CheckformService } from './checkform.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { isLoggedIn } from './islogged.guard';
const appRoute: Routes  = [
  {path:'',component:HomeComponent},
  {path:'reg',component:RegComponent},
  {path:'auth',component:AuthComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[isLoggedIn]},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [

    RouterModule.forRoot(appRoute),
    BrowserModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    AppRoutingModule
  ],
  providers: [CheckformService,AuthService,isLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
