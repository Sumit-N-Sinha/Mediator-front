import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartupService } from '../startup/startup.service';

@Component({
  selector: 'app-start-header',
  templateUrl: './start-header.component.html',
  styleUrls: ['./start-header.component.css']
})
export class StartHeaderComponent implements OnInit {

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
