import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() book: Book;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onReadMore() {
    console.log(this.book.id);
    this.router.navigate([`element/${this.book.id}`]);
  }
}
