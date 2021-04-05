import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  items: Book[] = [];
  booksChanged = new Subject<Book[]>();
  constructor() {}

  add(book: Book) {
    this.items.push(book);
    console.log(this.items)
    this.booksChanged.next(this.items);
  }

  remove(index: number) {
    this.items.splice(index,1);
    this.booksChanged.next(this.items);
  }
}
