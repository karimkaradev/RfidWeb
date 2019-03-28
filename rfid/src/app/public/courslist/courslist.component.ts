import { Component, OnInit } from '@angular/core';
import { fakeTypeCours } from 'src/assets/fake_typecours';
import { TypeCours } from 'src/app/models/TypeCours';

@Component({
  selector: 'app-courslist',
  templateUrl: './courslist.component.html',
  styleUrls: ['./courslist.component.scss']
})
export class CourslistComponent implements OnInit {
  typeCours:TypeCours[];
  constructor() { }

  ngOnInit() {
    this.typeCours=fakeTypeCours;
  }
more(q){

}

}
