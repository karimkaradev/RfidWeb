import { Injectable } from '@angular/core';
import { AuthStore } from './authstore';
import { SessionDataService } from './session-data.service';
import { tap } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class AuthService {

constructor(
private authStore: AuthStore,
private authDataService: SessionDataService) { }

login(creds) {
return this.authDataService.login(creds).pipe(tap((session) => this.authStore.login(session)));
}

logout() {
this.authStore.logout();
}
}
