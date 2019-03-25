import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../app/_services/jwt.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  customers: any;

  constructor(private http: HttpClient, private jwtService: AuthenticationService) { }

  ngOnInit() {
    // il faut modifier cette partie
    let token = localStorage.getItem('token');
    this.http.get("http://192.168.1.174:55000/api/Customers", {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).subscribe(response =>{
      this.customers = response;
      console.log(response);
    }, err => {
      console.log(err);
    })

  }

}
