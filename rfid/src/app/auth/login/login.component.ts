import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../_services/jwt.service';
import { Users } from '../../models/users';
import { Router } from '@angular/router';
import { SessionService } from '../+state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router,
              private jwtService: AuthenticationService,
              private sessionService: SessionService ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  login2(form: NgForm) {

    this.submitted = true;
    console.log(form.value.password);

    const username = form.value.email;
    const password = form.value.password;

    const user: Users = new Users(username, password);

    this.jwtService.onLogin(user).subscribe(response => {
      // tslint:disable-next-line:no-string-literal
      const token = response.body['token'];

      this.jwtService.saveToken(token);
      this.submitted = false;
      this.router.navigate(['/client']);
    }, err => {
      console.log(err);
      this.submitted = true;
    });
  }
login(form) {
  this.sessionService.login(form).subscribe();
}
  onCancel() {

  }
}
