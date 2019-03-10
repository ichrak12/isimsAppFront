import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
$(document).ready(function(){
	$("#myInput").on("keyup", function() {
	var value = $(this).val().tolowerCase();
	$("#myDIV *").filter(function() {
	$(this).toggle($(this).text().tolowerCase().indexOf(value) > -1)
	});
	});
});
  }

  ngOnInit() {
  }
;

setActive(menu){
	$('li').removeClass();
	$('#'+menu).addClass("active");
}
}