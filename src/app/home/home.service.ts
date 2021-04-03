import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/models/book.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  books: Book[] = [];
  booksChanged = new Subject<Book[]>();

  constructor(private http: HttpClient) {}

  getBooks() {
    this.http.get<Book[]>(`${environment.apiUrl}/books`).subscribe((data) => {
      this.books = data;
      this.booksChanged.next(this.books);
    });
  }
}
