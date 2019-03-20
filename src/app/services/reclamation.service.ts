import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
server = 'http://127.0.0.1:8000/';
headers:Headers = new Headers;
options : any;

  constructor(private http:Http) { 
  this.headers.append('enctype','multipart/form-data');
  this.headers.append('content-Type','application/json');
  this.headers.append('X-Requested-With','XMLHttpRequest');
  this.options= new RequestOptions({ headers : this.headers});
  }

  addReclamation(info) {
    var data = JSON.stringify(info);
    console.log(data);
    return this.http.post(this.server+"addreclamation", data, this.options).pipe(map(res => res.json()));
  //return this.http.get(this.server+"addreclamation").pipe(map(res => res.json()));
  }

  showAllReclamations(){
    return this.http.get(this.server+"reclamations").pipe(map(res=>res.json()));
  }

  showReclamation(id){
    return this.http.get(this.server+"select_reclamation/"+id).pipe(map(res => res.json()));
  }

  editReclamation(info) {
    var data = JSON.stringify(info);
    return this.http.post(this.server+"editreclamation", data, this.options).pipe(map(res => res.json()));
  }

  deleteReclamation(id){
    return this.http.get(this.server+"delete_reclamation/"+id).pipe(map(res => res.json()));
  }
}
 
