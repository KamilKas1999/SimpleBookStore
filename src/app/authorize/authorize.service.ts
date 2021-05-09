import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/models/user.model';

export interface loginResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  user = new BehaviorSubject<loginResponse>(null); //temporary boolean
  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, password: string) {
    this.http
      .post<loginResponse>('http://localhost:8080/auth/signin', {
        email: email,
        password: password,
      })
      .subscribe(
        (data) => {
          this.user.next(data);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log('error');
        }
      );
  }

  register(email: string, password: string, name: string, surname: string) {
    this.http
      .post<loginResponse>('http://localhost:8080/auth/signup', {
        email: email,
        password: password,
        name: name,
        surname: surname,
      })
      .subscribe(
        (data) => {
          console.log('Registered!');
        },
        (error) => {
          console.log('error');
        }
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/']);
  }
}
