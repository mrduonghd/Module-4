import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : any[] = [];
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    // this.books = this.bookService.getAll();
    this.bookService.getAll().subscribe(res=>{
      this.books = res
    })
  }

  delete(id:any){
    if(confirm('Are you sure?')){
      this.bookService.delete(id).subscribe(res=>{
        this.getAll();
      })
    }
  }

}
