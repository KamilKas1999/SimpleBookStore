import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  user = new BehaviorSubject<boolean>(false); //temporary boolean
  constructor(private router : Router) {}

  login(username: string, password: string) {
    this.user.next(true);
    this.router.navigate(['/'])
  }

  register(username: string, password: string) {
    this.user.next(true);
    this.router.navigate(['/'])
  }

  logout() {
    this.user.next(false);  
    this.router.navigate(['/'])
  }
}
