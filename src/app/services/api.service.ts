import {Injectable, OnInit} from '@angular/core';
import {ConfigService} from "src/app/services/config.service"
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  private conf:any

  constructor(
    private config:ConfigService,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  get(endpoint:string):Observable<any> {
    return this.http.get<any>(this.config.get("apiURL")+endpoint)
  }

  put(endpoint:string, data:any):Observable<any> {
    return this.http.put<any>(this.config.get("apiURL")+endpoint,data)
  }

  post(endpoint:string, data:any):Observable<any> {
    return this.http.post<any>(this.config.get("apiURL")+endpoint,data)
  }

  delete(endpoint:string):Observable<any> {
    return this.http.delete<any>(this.config.get("apiURL")+endpoint)
  }

}
