import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  

  loginData: User = {
    email: '',
    password: ''
  }

  onSubmit(form: NgForm){
if(form.valid){
 this.authService.login(this.loginData).subscribe({
  next: (response) => {
    console.log("Login Successful", response);
    this.router.navigate(['dashboard']);
  },
  error: (error) => {
    console.log("Login Failed", error);
    alert("invalid login credentials, try again");
  }
 })
}
  }
}
