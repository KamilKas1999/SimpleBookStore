import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../shared/models/book.model';
import { environment } from '../../environments/environment';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private route: ActivatedRoute, private http: HttpClient,  private basketService: BasketService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.http
        .get<Book>(`${environment.apiUrl}/books/${this.id}`)
        .subscribe((data) => {
          this.book = data;
          console.log(this.book);
        });
    });
  }

  onAdd(){
    this.basketService.add(this.book);
  }
}
