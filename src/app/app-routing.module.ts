import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from  './home/home.component';
import { ReclamationComponent } from  './reclamation/reclamation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from  './edit/edit.component';

const routes: Routes = [
{ path:'', redirectTo: 'home', pathMatch:'full'},
{ path:'home', component:HomeComponent},
{ path:'reclamation', component:ReclamationComponent},
{ path:'edit/:id', component:EditComponent},
{ path:'calendar', component:CalendarComponent},
{ path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
