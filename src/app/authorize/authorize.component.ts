import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizeService } from './authorize.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
})
export class AuthorizeComponent implements OnInit {
  constructor(private authorizeService: AuthorizeService) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authorizeService.login(username, password);
  }

  onRegister(form: NgForm) {
    console.log(form);
  }
}
