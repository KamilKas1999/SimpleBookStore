import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onReadMore(){
    console.log(this.book.id)
    this.router.navigate([`element/${this.book.id}`])
  }

}
