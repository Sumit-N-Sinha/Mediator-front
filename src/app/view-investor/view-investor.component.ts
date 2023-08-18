import { Component, OnInit } from '@angular/core';
import { Investor } from '../investor/investor';
import { UserRole } from '../register/regis';
import { StartupService } from '../startup/startup.service';

@Component({
  selector: 'app-view-investor',
  templateUrl: './view-investor.component.html',
  styleUrls: ['./view-investor.component.css']
})
export class ViewInvestorComponent implements OnInit{

  inv : any;

  investor : Investor ={
    invId: 0,
    firstName: '',
    lastName: '',
    email: '',
    industry: '',
    startUpsInvested: 0,
    amountInvested: 0,
    user: {
      name : '',
      emailId : '',
      password : '',
      phone : 0,
      userRole : UserRole.STARTUP
    }
  }

  constructor(private startupService : StartupService){
    this.viewAll();
   }


  viewAll(){
    this.startupService.getInvestor().subscribe(data=>{
      this.inv = data;
      console.log(this.inv);
    })
  }
  ngOnInit(): void {
    
  }


}
