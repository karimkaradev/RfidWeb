import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { TypeCours } from '../models/TypeCours';
import { fakeTypeCours } from 'src/assets/fake_typecours';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  coursForm: Form;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  typeCours: TypeCours[] ;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

  this.typeCours=fakeTypeCours;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  submit(coursForm){
    console.log(coursForm);
  }

}
