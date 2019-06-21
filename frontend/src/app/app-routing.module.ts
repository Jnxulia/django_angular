import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { ListTicketComponent } from './list-ticket/list-ticket.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {path : '', component : LoginComponent},
  { path: 'list-ticket', component: ListTicketComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
