import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regis } from '../register/regis';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user";
  constructor(private httpClient: HttpClient) { }

  welcome(users: User) : Observable<Object>{
    console.log(users);
    return this.httpClient.post(`${this.baseUrl}`+"/login" ,users);
  }

  get() : Observable<Regis>{
    return this.httpClient.get<Regis>(`${this.baseUrl}`+"/currentUser");
  }
}
