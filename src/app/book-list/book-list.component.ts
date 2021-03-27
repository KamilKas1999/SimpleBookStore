import { Component, OnInit } from '@angular/core';
import { BookListService } from './book-list.service';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookListService) {}

  ngOnInit(): void {
    this.bookService.getBooks();
    this.bookService.booksChanged.subscribe((books) => {
      this.books = books;
      console.log(books);
    });
  }
}
