import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from 'src/app/_services/jwt.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {


  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;

    

    // decode the token to get its payload
   
    if (!this.auth.hasRole(expectedRole)
     
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
