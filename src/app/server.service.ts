import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
  	const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/products', servers, {headers: headers});
    //return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',
      //servers,
      //{headers: headers});
  }

   getServers() {
    return this.http.get('http://localhost:8000/api/products/3')
      .map(
        (response: Response) => {
          const apiData = response.json();
           for (const data of apiData) {
            data.name = 'FETCHED_' + data.name;
          }
          return apiData;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getSingleProduct(){
  	return this.http.get('http://localhost:8000/api/products/3')
  	.map(
  		(response: Response) =>{
  			return response.json();
  		});
  }
}


