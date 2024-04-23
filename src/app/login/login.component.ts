import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.pattern("abc"),
      Validators.maxLength(8),
    ]),
  });
  signIn() {
    console.log(this.loginForm);
  }
}
