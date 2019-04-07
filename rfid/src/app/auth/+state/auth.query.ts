import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './authstore';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  isLoggedIn$ = this.select((state) => state.isValid);
  name$ = this.select((state) => state.name);
roles$= this.select((state)=> state.roles);
jwt$= this.select((state)=> state.token);
  constructor(protected store: AuthStore) {
    super(store);
  }

}

