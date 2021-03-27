import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  books: Book[] = [];
  booksChanged = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  getBooks(){
    this.http.get<Book[]>("http://localhost:8080/books").subscribe(data => {
      this.books = data;
      this.booksChanged.next(this.books);

    })
  }
}
