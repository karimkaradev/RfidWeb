import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as storage from '../storage';

export interface AuthState {
  token: string;
  name: string;
}

export function createInitialSessionState(): AuthState {
  return {
    token: null,
    name: null,
    ...storage.getSession(),
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialSessionState());
  }

  login(session: AuthState) {
    this.update(session);
    storage.saveSession(session);
  }

  logout() {
    storage.clearSession();
    this.update(createInitialSessionState());
  }
}
