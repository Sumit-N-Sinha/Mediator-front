import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Regis, UserRole } from 'src/app/register/regis';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regis!: Regis;
  user:User = {
    email : '',
    password : ''
  }

  constructor(private userService: UserService,
    private router: Router){ }
  welcom(){
    console.log(this.user);
    this.userService.welcome(this.user).subscribe(data1=>{
      this.userService.get().subscribe(data=>{
        this.regis = data;
        console.log(data);
        if(this.regis.userRole.match(UserRole.INVESTOR)){
          this.router.navigateByUrl('/investor');
        }else if(this.regis.userRole.match(UserRole.STARTUP)){
          this.router.navigateByUrl('/startup');
        }
      })
    },error=>alert("Incorrect Credentials"));
    
  }
  ngOnInit(): void {
  }

}
