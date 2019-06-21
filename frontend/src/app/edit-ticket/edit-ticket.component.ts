import { Component, ElementRef, Input, OnInit,ViewChild, OnDestroy } from '@angular/core';
import {Estados , Ticket} from '../model/ticket.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TicketService} from '../service/ticket.service';
import {UserService} from '../service/user.service';
import {User} from '../model/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.sass']
})
export class EditTicketComponent   {
  ticketForm: FormGroup;
  @Input()
  customTitle: string;
  ESTADOS  = Estados
  estados : any;
  usersData : User[];
  userSelected : User
  invalidForm : boolean = false;
  subscription : any;
  modalReference: any;
  constructor(config: NgbModalConfig, 
              private modalService: NgbModal, 
              private formBuilder: FormBuilder,
              private service : TicketService,
              private usersService : UserService,
              private router : Router) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.estados = Object.keys(this.ESTADOS).map((index)=> this.ESTADOS[index]);
    this.usersService.getUsers().subscribe((res)=>{
      this.usersData = res
     }, error=>{
       console.info(error)
     });


  }
  selectChangeUser( $event) {
    this.userSelected = this.usersData[$event];
  }
  onSubmit() {

    this.invalidForm = false ;
    if (this.ticketForm.invalid) {
      this.invalidForm = true;
      return;
    }
    const ticket :Ticket = {
      id : null,
      titulo: this.ticketForm.controls.titulo.value , 
      descripcion: this.ticketForm.controls.descripcion.value , 
      estado : this.ticketForm.controls.estado.value ,
      usuario: this.ticketForm.controls.usuario.value ,
    } 
    this.subscription = this.service.createTicket(ticket).subscribe((res)=>{
      this.modalReference.close();  
      this.router.navigate(['list-ticket']);
      
    }, error=>{
      console.info(error)
      this.invalidForm = true;
    });

  } 
  open(content) {
    this.modalReference = this.modalService.open(content);
  }
  ngOnInit() {
    this.ticketForm = this.formBuilder.group({

      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado : ['',Validators.required],
      usuario: ['', Validators.required]
    });
  }
  ngOnDestroy(){
    try {
      this.subscription.unsubscribe()
    } catch (error) {
      console.info("para evitar que no se cree el subscribe")
    }
    
  }
}