import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbonnementsService {
  host = 'http://192.168.1.174:58000';

  constructor(private http: HttpClient) { }

  getAbonnement() {
    return this.http.get<any> (this.host + '/api/TypeCours');
  }
}
