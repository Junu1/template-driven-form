import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}
  address = ['Kathmandu', 'Lalitpur', 'Bhaktapur'];
  loginModel = new Login(
    'Anisha',
    'Khatiwada',
    '',
    'anisha.khatiwada@f1soft.com',
    'Female'
  );

  onSubmit(loginForm) {
    this.loginService.enroll(this.loginModel);
    // .subscribe(
    //   data => console.log("Success",data),
    //   error => console.log("Error",error)
    // )
    console.log(loginForm);
  }
}
