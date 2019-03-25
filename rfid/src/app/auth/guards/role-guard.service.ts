import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from 'src/app/_services/jwt.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  // VERIFIER AUTRE SOLUTION POUR RECUPERER ROLE
  role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    
    const token = localStorage.getItem('token');
    
    // decode the token to get its payload
    const tokenPayload = decode(token);
    console.log(tokenPayload);
    if (
      !this.auth.isValid() || 
      !tokenPayload[this.role].includes(expectedRole)
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
