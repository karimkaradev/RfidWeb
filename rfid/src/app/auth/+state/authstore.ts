import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as storage from '../storage';



export interface AuthState {
  token: string;
  name: string;
  roles:string[];
  isValid:boolean;
}

export function createInitialSessionState(): AuthState {
  return {
    token: null,
    name: null,
    roles:null,
    isValid:false,
    ...storage.getSession(),
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialSessionState());
  }

 
  
}
