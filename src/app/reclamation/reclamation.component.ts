import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../reclamation';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
declare var $:any;
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  public reclamationModel = new Reclamation();
  public file_src:string='../assets/isims.jpg';
  /*uploadForm: FormGroup;
  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';*/
  constructor(
    //private fb: FormBuilder,
    private router:Router,
    private reclamationService: ReclamationService) { }

  ngOnInit() {
    /*this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });*/
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

  addReclamation(){
    /*let data = new FormData();
    let fileItem = this.uploader.queue._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          data.append('dataType', this.uploadForm.controls.type.value);
          this.reclamationService.uploadFile(data).subscribe(data => alert(data.message));
          this.uploader.clearQueue();*/
    this.reclamationService
      .addReclamation(this.reclamationModel)
      .subscribe(response => { console.log(response); })
  }
    
}
