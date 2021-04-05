import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-element',
  templateUrl: './basket-element.component.html',
  styleUrls: ['./basket-element.component.scss'],
})
export class BasketElementComponent implements OnInit {
  @Input() book: Book;
  @Input() index : number;
  constructor(private basket: BasketService) {}

  ngOnInit(): void {}

  onRemove(){
   this.basket.remove(this.index)
  }
}
