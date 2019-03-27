import { Component, OnInit } from '@angular/core';
import { TypeCours } from '../models/TypeCours';
import { fakeTypeCours } from 'src/assets/fake_typecours';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
typeCours:TypeCours[];
  constructor() { }

  ngOnInit() {
    this.typeCours=fakeTypeCours;
  }
more(q){

}
}
