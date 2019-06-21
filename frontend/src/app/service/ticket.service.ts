import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Ticket} from "../model/ticket.model";
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService ) {


   }
  baseUrl: string = 'http://localhost:8000/api/tickets/';

  getTickets() {
    return this.http.get<Ticket[]>(this.baseUrl,{headers : this.getHeader()});
  }

  getTicketById(id: number) {
    return this.http.get<Ticket>(this.baseUrl + '/' + id, {headers : this.getHeader()});
  }

  createTicket(Ticket: Ticket) {
    console.log(Ticket)
    return this.http.post(this.baseUrl, Ticket,{headers : this.getHeader()});
  }

  updateTicket(Ticket: Ticket) {
    return this.http.put(this.baseUrl + '/' + Ticket.id, Ticket,{headers : this.getHeader()});
  }

  deleteTicket(id: number) {
    return this.http.delete(this.baseUrl + '/' + id,{headers : this.getHeader()});
  }
  getHeader(): any{
    return  new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Token " + this.authService.getToken()
      })

  }
}