import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../model/user.model"
@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(user :User) {
    return this.http.post<any>('http://localhost:8000/api/token/login/', user)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }
  isEdit() : boolean{
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.is_superuser
  }
  getToken(): string {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.token
  }
  getId(): number {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.user
  }
}