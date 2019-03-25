import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  canActivate() {
    var token = localStorage.getItem("token");
 
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    

    this.router.navigate(["login"]);
    return false;
  }
}
