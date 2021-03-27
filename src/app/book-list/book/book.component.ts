import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
