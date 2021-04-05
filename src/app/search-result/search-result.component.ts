import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  books : Book[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      
      this.http
        .get<Book[]>(`${environment.apiUrl}/books/search?name=${params['searchedBook']}`)
        .subscribe((data) => {
          this.books = data;
          console.log(this.books);
        });
    });
  }

}
