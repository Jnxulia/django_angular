import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticket } from '../model/ticket.model';
import {TicketService} from '../service/ticket.service'
import { AuthenticationService } from '../service/auth.service';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css'],
  providers:  [ EditTicketComponent ]
})
export class ListTicketComponent implements OnInit , OnDestroy{
data:Ticket[];
idUser : number
canAdd : boolean = false;
 subscription: any;
 modal : EditTicketComponent
  constructor(private service : TicketService ,private auth : AuthenticationService, private modalService: EditTicketComponent) { 
    this.canAdd = auth.isEdit()
    this.idUser = auth.getId();
    console.log(auth.getId())

  }
  loadData(){
    this.subscription = this.service.getTickets().subscribe((res)=>{
      this.data = res
     }, error=>{
       console.info(error)
     });
  }
  
  ngOnInit() {
    this.loadData()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
