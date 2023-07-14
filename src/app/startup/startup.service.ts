import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Startup } from './startup';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private baseUrl = "http://localhost:8080/apps/v2/";
  constructor(private httpClient: HttpClient) { }

  viewMy(startup: Startup): Observable<Object>{
    console.log(startup);
    return this.httpClient.post(`${this.baseUrl}`,startup);
  }
}
