import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Startup } from './startup';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private baseUrl = "http://localhost:8080/apps/v2/";
  constructor(private httpClient: HttpClient) {

   }

  

  viewMy(startup: Startup): Observable<Object>{
    console.log(startup);
    return this.httpClient.post(`${this.baseUrl}`+"startup/",startup);
  }

  getByName(founderName:string) : Observable<Object>{
    let param = new HttpParams()
            .set('founderName',founderName);
    console.log(founderName);
    return this.httpClient.get(`${this.baseUrl}`+"startup/getByName/",{params:param});
  }

  getInvestor() : Observable<Object>{
    return this.httpClient.get("http://localhost:8080/api/v1/investor");
  }

  logOutUser() : Observable<Object>{
    return this.httpClient.get("http://localhost:8080/user/logout");
  }
}
