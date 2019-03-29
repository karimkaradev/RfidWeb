import { Component, OnInit } from '@angular/core';
import { TypeCours } from '../models/TypeCours';
import { fakeTypeCours } from 'src/assets/fake_typecours';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  typeCours:TypeCours[];
  constructor() { }

  ngOnInit() {
    this.typeCours=fakeTypeCours;
  }
more(q){

}
}
