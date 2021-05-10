import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { HomeComponent } from './home/home.component';
import { MiniBookComponent } from './home/mini-book/mini-book.component';
import { ConsoleComponent } from './console/console.component';
import { AddbookComponent } from './console/addbook/addbook.component';
import { FormsModule, NgForm } from '@angular/forms';
import { IdListComponent } from './console/id-list/id-list.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { ElementComponent } from './element/element.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './authors/author/author.component';
import { RemoveComponent } from './console/remove/remove.component';
import { UpdateComponent } from './console/update/update.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ResultComponent } from './search-result/result/result.component';
import { FooterComponent } from './footer/footer.component';
import { BasketComponent } from './basket/basket.component';
import { BasketElementComponent } from './basket/basket-element/basket-element.component';
import { NavbarSearchComponent } from './navbar/navbar-search/navbar-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    NavbarComponent,
    NavbarItemComponent,
    HomeComponent,
    MiniBookComponent,
    ConsoleComponent,
    AddbookComponent,
    IdListComponent,
    AuthorizeComponent,
    ElementComponent,
    AuthorsComponent,
    AuthorComponent,
    RemoveComponent,
    UpdateComponent,
    SearchResultComponent,
    ResultComponent,
    FooterComponent,
    BasketComponent,
    BasketElementComponent,
    NavbarSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
