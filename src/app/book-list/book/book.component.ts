import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  constructor(private route: ActivatedRoute, private router: Router, private basketService: BasketService) { }

  ngOnInit(): void {
  }

  onReadMore(){
    this.router.navigate([`element/${this.book.id}`])
  }

  onAdd(){
    this.basketService.add(this.book);
  }

}
