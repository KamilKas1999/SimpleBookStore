import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/shared/models/author.mode';
import { Book } from 'src/app/shared/models/book.model';
import { BookPost } from 'src/app/shared/models/bookPost.model';
import { Genre } from 'src/app/shared/models/genre.model';
import { Type } from 'src/app/shared/models/type.model';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss'],
})
export class AddbookComponent implements OnInit {
  constructor(private consoleService: ConsoleService) {}

  ngOnInit(): void {}

  authorSubmit(form: NgForm) {
    let author: Author = {
      id: null,
      name: form.value.authorName,
      surname: form.value.authorSurname,
    };
    this.consoleService.addAuthor(author);
  }

  genreSubmit(form: NgForm) {
    let genre: Genre = {
      id: null,
      name: form.value.genreName,
    };
    this.consoleService.addGenre(genre);
  }

  typeSubmit(form: NgForm) {
    let type: Type = {
      id: null,
      name: form.value.typeName,
    };
    this.consoleService.addType(type);
  }

  bookSubmit(form: NgForm) {
    let book: BookPost = {
      name: form.value.bookName,
      price: form.value.price,
      coverLink: form.value.coverLink,
      pdfLink: form.value.pdfLink,
      published: form.value.published,
      description: form.value.description,
      authorId: form.value.authorId,
      genreId: form.value.genreId,
      typeId: form.value.typeId,
    };
    this.consoleService.addBook(book);
  }
}
