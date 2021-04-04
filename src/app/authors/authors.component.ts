import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/models/author.mode';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors: Author[];
  constructor(private authorService: AuthorsService) {}

  ngOnInit(): void {
    this.authorService.getAuthors();
    this.authorService.authorsChanged.subscribe((data) => {
      this.authors = data;
      console.log(this.authors);
    });
  }
}
