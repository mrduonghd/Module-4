import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { BookListComponent } from './components/books/book-list/book-list.component';

const routes: Routes = [
  {
    path: '' ,component: BookListComponent
  },
  {
    path: 'create' ,component: BookAddComponent
  },
  {
    path: 'edit/:id' ,component: BookEditComponent
  },
  {
    path: 'detail/:id' ,component: BookDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
