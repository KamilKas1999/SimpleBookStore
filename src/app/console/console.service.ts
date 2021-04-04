import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../shared/models/author.mode';
import { environment } from '../../environments/environment';
import { Genre } from '../shared/models/genre.model';
import { Type } from '../shared/models/type.model';
import { Book } from '../shared/models/book.model';
import { BookPost } from '../shared/models/bookPost.model';
@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  constructor(private http: HttpClient) {}

  addAuthor(author: Author) {
    this.http.post<Author>(`${environment.apiUrl}/authors`, author).subscribe(
      (data) => {
        alert('Added');
      },
      (err) => {
        alert('Error');
      }
    );
  }

  addGenre(genre: Genre) {
    this.http.post<Genre>(`${environment.apiUrl}/genres`, genre).subscribe(
      (data) => {
        alert('Added');
      },
      (err) => {
        alert('Error');
      }
    );
  }

  addType(type: Type) {
    this.http.post<any>(`${environment.apiUrl}/types`, type).subscribe(
      (data) => {
        alert('Added');
      },
      (err) => {
        alert('Error');
      }
    );
  }

  addBook(book: BookPost) {
    this.http.post<Book>(`${environment.apiUrl}/books`, book).subscribe(
      (data) => {
        alert('Added');
      },
      (err) => {
        alert('Error');
      }
    );
  }

  remove(what: string, id:number){
    this.http.delete(`${environment.apiUrl}/${what}/${id}`).subscribe(()=>{
      alert("Removed!")
    },err =>{
      alert("Error")
    })
  }

  getBooks(){
    return this.http.get<Book[]>(`${environment.apiUrl}/books`);
  }

  getAuthors(){
    return this.http.get<Author[]>(`${environment.apiUrl}/authors`);
  }

  getGenres(){
    return this.http.get<Genre[]>(`${environment.apiUrl}/genres`);
  }

  getTypes(){
    return this.http.get<Type[]>(`${environment.apiUrl}/types`);
  }
}
