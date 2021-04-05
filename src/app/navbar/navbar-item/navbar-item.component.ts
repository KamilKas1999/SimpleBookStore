import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent implements OnInit {
  @Input() value: string;
  @Input() link: string;
  amount: number = 0;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    if ((this.value === 'Basket')) {
      this.basketService.booksChanged.subscribe((data) => {
        this.amount = data.length;
      });
    }
  }
}
