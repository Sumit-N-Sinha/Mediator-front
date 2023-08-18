import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../Login/login/login.component';
import { User } from '../Login/user';
import { UserService } from '../Login/user.service';
import { Regis, UserRole } from '../register/regis';
import { Startup } from '../startup/startup';
import { StartupService } from '../startup/startup.service';

@Component({
  selector: 'app-start-profile',
  templateUrl: './start-profile.component.html',
  styleUrls: ['./start-profile.component.css']
})
export class StartProfileComponent implements OnInit {
  ngOnInit(): void {
    this.viewprofile;
  }

  user!: User;
  Profile : any;
  startup : Startup ={
    startId : 0,
	  companyName: '',
	  founderName: '',
	  location: '',
	  industryType: '',
	  companyEmail: '',
	  totalValuation: 0,
	  services: '',
	  description: '',
	  user : {
      name : '',
      emailId : '',
      password : '',
      phone : 0,
      userRole : UserRole.STARTUP
    }
  };

  constructor(private startService : StartupService,
    private userService : UserService) {  
      this.userService.get().subscribe(data=>{
        console.log(data);
        this.startup.founderName = data.name;
        console.log(this.startup.founderName);
        this.viewprofile();
      })
  }
  
  viewprofile(){
    console.log(this.startup.founderName);
      this.startService.getByName(this.startup.founderName).subscribe(data=>{
      console.log(data);
      this.Profile = data;
      console.log(this.Profile);
  })
  }
  
}
