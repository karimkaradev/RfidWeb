import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Users } from '../models/users';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {


    private host: string = 'https://localhost:44351';
    jwtToken: string;
    routeNavigation: string;

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
     }


      onLogin(user: Users) {
        return this.http.post (this.host + '/api/auth/login', user, {observe: 'response'});
      }

      saveToken(jwt: string) {
        localStorage.setItem('token', jwt);
        this.jwtToken = jwt;
      }

      loadToken(){
        this.jwtToken = localStorage.getItem('token');
      }

      logout(){
        localStorage.removeItem('token');
        this.jwtToken = null;
      }


      isValid(): boolean {
        if(this.jwtToken == null) {
          this.loadToken();
        }
        return !this.jwtHelper.isTokenExpired(this.jwtToken);
      }

      getToken(){
        return this.jwtToken;
      }
}
