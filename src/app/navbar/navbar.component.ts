import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize/authorize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  constructor(private authorizeService: AuthorizeService) {}

  ngOnInit(): void {
    if (this.isLogin) {
      this.authorizeService.logout();
    } else {
      this.authorizeService.user.subscribe((login) => (this.isLogin = login));
    }
  }
}
