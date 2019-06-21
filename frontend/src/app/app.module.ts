import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

import {AuthenticationService} from "./service/auth.service";
import {TicketService} from "./service/ticket.service";
import { HttpClientModule } from '@angular/common/http'; 
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe} from './filter.pipe';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListTicketComponent,
    EditTicketComponent,
    FilterPipe
  ],
  
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbModule.forRoot() ,
    
  ],

  providers: [AuthenticationService, TicketService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
