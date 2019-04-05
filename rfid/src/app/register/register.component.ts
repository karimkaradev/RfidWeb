import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  types = ['Type 1', 'Type 2'];
  postalPattern: "/^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/";
  numPattern: "(0|\\+33|0033)[1-9][0-9]{8}";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(this.postalPattern)]],
      city: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(this.numPattern)]],
      subscription: ['', Validators.required],
      checkbox: ['', Validators.requiredTrue]
    });
    this.secondFormGroup = this._formBuilder.group({
      badge: ['', Validators.required]
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }
}