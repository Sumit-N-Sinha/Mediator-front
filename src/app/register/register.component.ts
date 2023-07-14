import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regis, UserRole } from './regis';
import { RegisterserviceService } from './registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regis : Regis ={
    
    name : '',
    emailId : '',
    phone : 91,
    password : '',
    userRole : UserRole.INVESTOR,
  }

  constructor(private regisService: RegisterserviceService,
    private router: Router) { }

  register(){
    console.log(this.regis);
    this.regisService.regist(this.regis).subscribe(data=>{
      alert("Registered Successfully")
      
    },error=>alert("Incorrect Credentials"));
    
  };

  ngOnInit(): void {
  }


}
