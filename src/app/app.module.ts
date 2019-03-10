import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { EditComponent } from './edit/edit.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { ReclamationService } from './services/reclamation.service';
import { HttpModule,Headers,RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective } from "ng2-file-upload";
//import { CustomMaterialModule } from "./reclamation/material.module";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReclamationComponent,
    EditComponent,
    CalendarComponent,
    ContactComponent,
    FileSelectDirective
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ImageUploadModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule
    //CustomMaterialModule
  ],
  providers: [ReclamationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
