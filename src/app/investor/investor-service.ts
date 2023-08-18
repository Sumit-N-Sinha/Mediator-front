import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(private httpClient : HttpClient){ }

  getByName(founderName:string) : Observable<Object>{
    let param = new HttpParams()
            .set('founderName',founderName);
    console.log(param);
    return this.httpClient.get("localhost:8080/investor/getByName/",{params:param});
  }
}
