import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../shared/models/book.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  private subscribe: Subscription;
  constructor(private homeService : HomeService) { }


  ngOnInit(): void {
    this.homeService.getBooks();
    this.subscribe = this.homeService.booksChanged.subscribe(data => {
      this.books = data;
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
