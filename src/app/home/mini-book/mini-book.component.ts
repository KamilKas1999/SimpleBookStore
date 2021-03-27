import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-mini-book',
  templateUrl: './mini-book.component.html',
  styleUrls: ['./mini-book.component.scss']
})
export class MiniBookComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }

}
