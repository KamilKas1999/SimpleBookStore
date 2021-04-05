import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../shared/models/book.model';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  books: Book[];
  price = 0;
  serviceSubscribe: Subscription;
  constructor(private basketService: BasketService) {}


  ngOnInit(): void {
    this.books = this.basketService.items;
    this.price = this.books.reduce((curr, prev) => {
      console.log(curr)
      return curr + prev.price;
    }, 0);
    this.serviceSubscribe = this.basketService.booksChanged.subscribe((data) => {
      console.log(data);
      this.books = data;
      this.price = this.books.reduce((curr, prev) => {
        console.log(curr)
        return curr + prev.price;
      }, 0);
    });
  }
  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
}
