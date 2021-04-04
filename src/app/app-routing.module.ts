import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddbookComponent } from './console/addbook/addbook.component';
import { ConsoleComponent } from './console/console.component';
import { IdListComponent } from './console/id-list/id-list.component';
import { RemoveComponent } from './console/remove/remove.component';
import { UpdateComponent } from './console/update/update.component';
import { ElementComponent } from './element/element.component';
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
      {path : 'remove', component: RemoveComponent},
      {path : 'update', component: UpdateComponent},
    ],
  },
  {
    path: 'login',
    component: AuthorizeComponent,
  },
  {
    path: 'element/:id',
    component: ElementComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
