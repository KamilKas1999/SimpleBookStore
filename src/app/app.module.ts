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

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    NavbarComponent,
    NavbarItemComponent,
    HomeComponent,
    MiniBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
