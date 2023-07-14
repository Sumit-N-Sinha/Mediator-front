import { Component } from '@angular/core';
import { Startup } from '../startup/startup';

@Component({
  selector: 'app-start-profile',
  templateUrl: './start-profile.component.html',
  styleUrls: ['./start-profile.component.css']
})
export class StartProfileComponent {

  startup : Startup | undefined;

  
}
