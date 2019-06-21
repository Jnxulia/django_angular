import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators , ReactiveFormsModule } from "@angular/forms";
import {Router} from "@angular/router";

import {AuthenticationService} from "../service/auth.service";
import {User} from "../model/user.model"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  onSubmit() {
    this.submitted = true;
    this.invalidLogin = false ;
    if (this.loginForm.invalid) {
      return;
    }
    const loginUser :User = {
      username : this.loginForm.controls.username.value , 
      password :this.loginForm.controls.password.value
    } 
    this.authService.login(loginUser).subscribe((res)=>{
     if(res.token){
      this.router.navigate(['list-ticket']);
     }else{
       this.invalidLogin = true;
     }
    }, error=>{
      console.info(error)
      this.invalidLogin = true;
    });

  } 

  ngOnInit() {
    localStorage.removeItem("currentUser");
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
