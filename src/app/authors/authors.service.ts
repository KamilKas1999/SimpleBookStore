import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../shared/models/author.mode';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors: Author[] = [];
  authorsChanged = new Subject<Author[]>();

  constructor(private http : HttpClient) { }

  
  getAuthors(){
    this.http.get<Author[]>(`${environment.apiUrl}/authors`).subscribe(data => {
      this.authors = data;
      this.authorsChanged.next(this.authors);
    })
  }
}
