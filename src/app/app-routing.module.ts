import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddbookComponent } from './console/addbook/addbook.component';
import { ConsoleComponent } from './console/console.component';
import { IdListComponent } from './console/id-list/id-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'console',
    component: ConsoleComponent,
    children: [
      {
        path: 'addbook',
        component: AddbookComponent,
      },
      { path: 'idList', component: IdListComponent },
    ],
  },
  {
    path: 'login',
    component: AuthorizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
