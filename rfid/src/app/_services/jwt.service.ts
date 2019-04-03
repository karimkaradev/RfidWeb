import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Users } from '../models/users';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {


    isAuthentified$: Observable<boolean>;
    private host = 'https://localhost:44351';
    jwtToken: string;
    routeNavigation: string;
    // VERIFIER AUTRE SOLUTION POUR RECUPERER ROLE
    role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
     }

     // exemple akita auth
     login(creds) {
      return timer(300).pipe(mapTo({ token: 'token', name: 'Inbal Sinai' }));
    }

      onLogin(user: Users) {
        return this.http.post (this.host + '/api/auth/login', user, {observe: 'response'});
      }

      saveToken(jwt: string) {
        localStorage.setItem('token', jwt);
        this.jwtToken = jwt;
      }

      loadToken() {
        this.jwtToken = localStorage.getItem('token');
      }

      logout() {
        localStorage.removeItem('token');
        this.jwtToken = null;
      }


      isValid(): boolean {
        if (this.jwtToken == null) {
          this.loadToken();
        }
        return !this.jwtHelper.isTokenExpired(this.jwtToken);
      }

      getToken() {
        return this.jwtToken;
      }

      hasRole(expectedRole:string){
        const tokenPayload = decode(this.jwtToken);
       return (this.isValid() && tokenPayload[this.role].includes(expectedRole)) 
      }
}
