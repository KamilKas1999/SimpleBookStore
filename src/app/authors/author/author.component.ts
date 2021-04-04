import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/models/author.mode';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() author: Author;
  constructor() { 
    console.log(this.author)
  }

  ngOnInit(): void {
    console.log(this.author)
  }

}
