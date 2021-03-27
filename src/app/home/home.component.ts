import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.getBooks();
    this.homeService.booksChanged.subscribe(data => {
      this.books = data;
    })
  }

}
