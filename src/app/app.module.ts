import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
