import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookListService } from './book-list.service';
import { Book } from '../shared/models/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private subscribe: Subscription;

  constructor(private bookService: BookListService) {}


  ngOnInit(): void {
    this.bookService.getBooks();
    this.subscribe = this.bookService.booksChanged.subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy(): void {
   this.subscribe.unsubscribe();
  }
}
