import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-decouverte',
  templateUrl: './decouverte.component.html',
  styleUrls: ['./decouverte.component.scss']
})
export class DecouverteComponent implements OnInit {

  public decouverteForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<DecouverteComponent>, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.decouverteForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      checkbox: new FormControl('', Validators.required)
    });
  }

  onSubmit(form){
    console.log(form);
  }

  closeModal(){
    this.dialogRef.close();
  }

}
