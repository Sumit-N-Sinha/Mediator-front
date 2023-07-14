import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regis } from './regis';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private baseUrl = "http://localhost:8080/user/register";
  constructor(private httpClient: HttpClient) { }

  regist(register: Regis): Observable<Object>{
    console.log(register);
    return this.httpClient.post(`${this.baseUrl}`,register);
  }
}
