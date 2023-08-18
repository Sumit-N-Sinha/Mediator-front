import { Component, OnInit } from '@angular/core';
import { Investor } from '../investor/investor';
import { InvestorService } from '../investor/investor-service';
import { User } from '../Login/user';
import { UserService } from '../Login/user.service';
import { UserRole } from '../register/regis';

@Component({
  selector: 'app-invprofile',
  templateUrl: './invprofile.component.html',
  styleUrls: ['./invprofile.component.css']
})
export class InvprofileComponent implements OnInit {

  ngOnInit(): void {
    this.viewprofile;
  }

  user!: User;
  Profile : any;
  investor : Investor ={
    invId : 0,
	  firstName: '',
	  lastName: '',
	  email: '',
	  industry: '',
	  startUpsInvested: 0,
	  amountInvested: 0,
	  user : {
      name : '',
      emailId : '',
      password : '',
      phone : 0,
      userRole : UserRole.STARTUP
    }
  };

  constructor(private invService : InvestorService,
    private userService : UserService) {  
      this.userService.get().subscribe(data=>{
        console.log(data);
        this.investor.firstName = data.name;
        console.log(this.investor.firstName);
        this.viewprofile();
      })
  }
  
  viewprofile(){
    console.log(this.investor.firstName);
      this.invService.getByName(this.investor.firstName).subscribe(data=>{
      console.log(data);
      this.Profile = data;
      console.log(this.Profile);
  })
  }
}
