import { Injectable } from '@angular/core';
import { AuthStore, AuthState, createInitialSessionState } from './authstore';
import { SessionDataService } from './session-data.service';
import { tap, mapTo } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import decode from 'jwt-decode';
import { timer } from 'rxjs';
import { Users } from 'src/app/models/users';
import * as storage from '../storage';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private host2 = 'https://localhost:5000/api';
    private host = 'http://192.168.1.174:58000/api';
    jwtToken: string;
    routeNavigation: string;
    role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

    constructor(
        private authStore: AuthStore,
        private http: HttpClient, private jwtHelper: JwtHelperService) { }

//    login(data) {
//        console.log(data);
//        return this.data(data).pipe(tap((session) => {
//            storage.saveSession(session.token);
//            this.authStore.update(session);

//        }));
//     }


    logout() {
        storage.clearSession();
        this.authStore.update(createInitialSessionState());
    }

    isValid(session: AuthState) {
        if (session.token && !this.jwtHelper.isTokenExpired(session.token)) {
            this.authStore.update({ isValid: true })
        }
        else {
            this.logout()
        }
    }
    /* hasRole(expectedRole: string) {
       const tokenPayload = decode(this.jwtToken);
       return (this.isValid() && tokenPayload[this.role].includes(expectedRole))
   }*/
    // data(form) {
    //     return this.http.post<any>(this.host+'/Auth/login',form)
        
    //     .pipe(tap(data=>{
    //         const auth:AuthState=this.decodeToken(data)
    //         this.authStore.update(auth) }));
    // }
    login(creds) {
       return simulateRequest(creds).pipe(tap(user => this.authStore.update(user)));
   }
        
         
    decodeToken(data){
        let jwt: AuthState;
        if (data) {
            const tokenPayload = decode(data);
            console.log(tokenPayload)

            jwt.token = data;
            jwt.roles = tokenPayload[this.role]
        }

       return jwt;
    } 
}
        export function simulateRequest(creds) {
    return timer(400).pipe(
        mapTo({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmF0b3F1ZS5wZW5hdGlidXMuZXRAc2FwaWVuaW1wZXJkaWV0b3JuYXJlLmNhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbImFkbWluIiwidXNlciJdLCJleHAiOjE1NTQ1NTY0NTUsImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjEuMTc0OjU4MDAwIiwiYXVkIjoiaHR0cDovLzE5Mi4xNjguMS4xNzQ6NTgwMDAifQ.4Ni22gY6svbrHo83HnsH2ifIM8Bvgomw2Z1OU5NYtfQ'
            , name: 'test@test.com', roles: ['admin', 'user'], isValid: true
        })
    );
    }

 

