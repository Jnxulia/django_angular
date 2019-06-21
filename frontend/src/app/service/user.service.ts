import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../model/user.model";
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable()
export class UserService {
headers : HttpHeaders
  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService ) {
     this.headers= this.getHeader()


   }
  baseUrl: string = 'http://localhost:8000/api/usuarios/';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl,{headers : this.headers});
  }


  getHeader(): any{
    return  new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Token " + this.authService.getToken()
      })

  }
}