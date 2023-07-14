import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { HeaderComponent } from './Header/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InvestorComponent } from './investor/investor.component';
import { RegisterComponent } from './register/register.component';
import { StartupComponent } from './startup/startup.component';
import { StartHeaderComponent } from './start-header/start-header.component';
import { StartProfileComponent } from './start-profile/start-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    InvestorComponent,
    RegisterComponent,
    RegisterComponent,
    StartupComponent,
    StartHeaderComponent,
    StartProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
