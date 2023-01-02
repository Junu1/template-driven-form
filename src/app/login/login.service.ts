import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  url = '';
  enroll(login: Login) {
    return this.http.post<any>(this.url, login);
  }
}
