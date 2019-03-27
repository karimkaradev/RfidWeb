import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { TypeCours } from '../models/TypeCours';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  coursForm: Form;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  typeCours: TypeCours[] = [
    {idTypeCours: 1, libelle: 'Fitness'},
    {idTypeCours: 2, libelle: 'Musculation'},
    {idTypeCours: 3, libelle: 'Aquabike'}
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

  

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
