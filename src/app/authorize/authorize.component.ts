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
    const email = form.value.email;
    const password = form.value.password;
    this.authorizeService.login(email, password);
  }

  onRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const surname = form.value.surname;
    this.authorizeService.register(email,password,name,surname);  
    form.reset();
  }
}
