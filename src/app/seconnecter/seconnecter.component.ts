import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
  	event.preventDefault();
  	const target = event.target;
  	const email = target.querySelector('#email').value;
  	const password = target.querySelector('#password').value;
  	this.Auth.getUserDetails(email, password).subscribe(response => { console.log(response); });
  	console.log(email, password);
  }

}
