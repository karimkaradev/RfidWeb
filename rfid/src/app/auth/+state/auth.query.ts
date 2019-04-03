import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './authstore';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.token));
  name$ = this.select((state) => state.name);

  constructor(protected store: AuthStore) {
    super(store);
  }

}
