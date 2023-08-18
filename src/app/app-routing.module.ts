import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { InvestorComponent } from './investor/investor.component';
import { InvprofileComponent } from './invprofile/invprofile.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartProfileComponent } from './start-profile/start-profile.component';
import { StartupComponent } from './startup/startup.component';
import { ViewInvestorComponent } from './view-investor/view-investor.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"investor",component:InvestorComponent},
  {path:"register",component:RegisterComponent},
  {path:"startup",component:StartupComponent},
  {path:"startProfile",component:StartProfileComponent},
  {path:"viewInvestor",component:ViewInvestorComponent},
  {path:"invProfile",component:InvprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
