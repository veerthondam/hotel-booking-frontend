import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface LoginForm{
  email: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginForm = {
    email: '',
    password: ''
  }

  onSubmit(form: NgForm){
if(form.valid){
  console.log(this.loginData)

}
  }
}
