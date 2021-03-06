import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from '../authorize/authorize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin = null;
  isOpen = false;
  constructor(
    private authorizeService: AuthorizeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isLogin) {
      this.authorizeService.logout();
    } else {
      this.authorizeService.user.subscribe((login) => (this.isLogin = login));
    }
  }

  openButton() {
    this.isOpen = !this.isOpen;
  }



  onLogout() {
    if (this.isLogin) {
      this.authorizeService.logout();
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
