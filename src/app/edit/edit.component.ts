import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../reclamation';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService} from '../services/message.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";

declare var $:any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public file_src:string = '..assets/images/isims.png';
  reclamationModel:Reclamation;
  service:string='';
  nom:string='';
  constructor(private recalamationService: ReclamationService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService : MessageService) { }

  ngOnInit() {
    this.getOneReclamation();
  }
  getOneReclamation() {
    var id = this.route.snapshot.params['id'];

    this.recalamationService
      .showReclamation(id)
  .subscribe(reclamation => {
      this.reclamationModel = reclamation[0];
      this.reclamationModel.id = id;
      this.file_src=this.reclamationModel.photo;
    })
  }

  imageUploaded(file:any){
    $('img').hide();
  }

  imageRemoved(file:any){
    $('img').show();
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  updateReclamation(){
    this.recalamationService
      .editReclamation(this.reclamationModel)
      .subscribe(response => {
        console.log(response);
        this.messageService.showMessage("div#msg","alert-info","reclamation has been succssfully updated","glyphicon-ok");
    })
  }
}

