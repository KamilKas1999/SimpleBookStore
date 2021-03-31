import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/models/author.mode';
import { Book } from 'src/app/shared/models/book.model';
import { Genre } from 'src/app/shared/models/genre.model';
import { Type } from 'src/app/shared/models/type.model';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-id-list',
  templateUrl: './id-list.component.html',
  styleUrls: ['./id-list.component.scss'],
})
export class IdListComponent implements OnInit {
  constructor(private consoleService: ConsoleService) {}

  books: Book[];
  authors: Author[];
  types: Type[];
  genres: Genre[];

  ngOnInit(): void {}

  onBook() {
    if (this.books) {
      this.books = null;
    } else {
      this.consoleService.getBooks().subscribe((data) => {
        this.books = data;
      });
    }
  }

  onAuthor() {
    if (this.authors) {
      this.authors = null;
    } else {
      this.consoleService.getAuthors().subscribe((data) => {
        this.authors = data;
      });
    }
  }
  onGenre() {
    if (this.genres) {
      this.genres = null;
    } else {
      this.consoleService.getGenres().subscribe((data) => {
        this.genres = data;
      });
    }
  }
  onType() {
    if (this.types) {
      this.types = null;
    } else {
      this.consoleService.getTypes().subscribe((data) => {
        this.types = data;
      });
    }
  }
}
