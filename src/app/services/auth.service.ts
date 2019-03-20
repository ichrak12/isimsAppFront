import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	server = 'http://127.0.0.1:8000/';
headers:Headers = new Headers;
options : any;

  constructor(private http:Http) { 
  this.headers.append('enctype','multipart/form-data');
  this.headers.append('content-Type','application/json');
  this.headers.append('X-Requested-With','XMLHttpRequest');
  this.options= new RequestOptions({ headers : this.headers});
  }



	getUserDetails(email, password){
		 var data = JSON.stringify({email, password});
    console.log(data);
    return this.http.post(this.server+"auth", {email, password}, this.options).pipe(map(res => res.json()));

	}
}