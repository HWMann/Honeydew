import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.config = data;
        console.log(this.config);
      });
  }

  get(key:string,subKey:string|null=null):any {
    if(subKey===null) {
      return this.config[key];
    }
    return this.config[key][subKey];
  }
}
