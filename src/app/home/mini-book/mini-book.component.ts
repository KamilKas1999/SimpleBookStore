import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-mini-book',
  templateUrl: './mini-book.component.html',
  styleUrls: ['./mini-book.component.scss']
})
export class MiniBookComponent implements OnInit {

  @Input() book: Book;
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.book);
  }

  onReadMore(){
    this.router.navigate([`element/${this.book.id}`])
  }

}
