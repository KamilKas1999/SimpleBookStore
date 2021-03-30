import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss'],
})
export class AddbookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  authorSubmit(form: NgForm) {
    console.log(form);
  }

  genreSubmit(form: NgForm) {
    console.log(form);
  }

  typeSubmit(form: NgForm) {
    console.log(form);
  }

  bookSubmit(form: NgForm) {
    console.log(form);
  }
}
