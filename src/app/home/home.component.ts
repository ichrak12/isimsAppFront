import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../reclamation';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation.service';
import { MessageService } from '../services/message.service';


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _reclamationService: ReclamationService,

          private router: Router,
          private messageService: MessageService
    ) { }
reclamations: any ;
  ngOnInit() {
    this.getAllReclamations();
  }
  getAllReclamations() {
    this._reclamationService.showAllReclamations().subscribe(reclamations => {
        this.reclamations = reclamations;
      })
    }
    deleteReclamation(id){
      var response= confirm("are you sure you want to delete this reclamation?");
      if ( response ==true){
        this._reclamationService
          .deleteReclamation(id)
          .subscribe(response=>{
            console.log(response);
            this.getAllReclamations();
        this.messageService.showMessage("div#msg","alert-info","reclamation has been succssfully DELETED","glyphicon-ok");
          })
      }else {}
    }
}
