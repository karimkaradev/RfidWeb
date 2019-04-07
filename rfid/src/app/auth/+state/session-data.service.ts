import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  login(creds) {
    return timer(300).pipe(mapTo({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmF0b3F1ZS5wZW5hdGlidXMuZXRAc2FwaWVuaW1wZXJkaWV0b3JuYXJlLmNhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbImFkbWluIiwidXNlciJdLCJleHAiOjE1NTQ1NTY0NTUsImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjEuMTc0OjU4MDAwIiwiYXVkIjoiaHR0cDovLzE5Mi4xNjguMS4xNzQ6NTgwMDAifQ.4Ni22gY6svbrHo83HnsH2ifIM8Bvgomw2Z1OU5NYtfQ'
    , name: 'Inbal Sinai',roles:['admin','user'] ,isValid:true}));
  }
}
