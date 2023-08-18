import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartupService } from '../startup/startup.service';

@Component({
  selector: 'app-invheader',
  templateUrl: './invheader.component.html',
  styleUrls: ['./invheader.component.css']
})
export class InvheaderComponent implements OnInit {

  constructor(private startupService : StartupService,
    private router : Router){ }
  ngOnInit(): void {
    
  }

  logout(){
    this.startupService.logOutUser().subscribe(data =>{
      this.router.navigateByUrl("/home");
    })
  }
}
