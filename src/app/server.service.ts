import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
  	
    return this.http.post('http://localhost:8000/api/products/data.json', servers);
    //return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',
      //servers,
      //{headers: headers});
  }
}

