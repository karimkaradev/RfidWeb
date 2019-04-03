import { Component } from '@angular/core';
import { fakeTypeCours } from 'src/assets/fake_typecours';
import { TypeCours } from 'src/app/models/TypeCours';
import { timer } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  
  flipped = false;
  imgSrc = "../../../assets/images/home-img1.jpg"

  flipIt() {
    this.flipped = !this.flipped;
    timer(3000);
  }



}