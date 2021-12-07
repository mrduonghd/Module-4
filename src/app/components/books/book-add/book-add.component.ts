import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  formAddBook? :any = FormGroup;
  constructor(
    private fb : FormBuilder,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title : ['',
    Validators.required],
      author : ['',
    Validators.required],
      description : ['',
    Validators.required],
    })
  }

  submit(){
    let data = this.formAddBook.value;
    this.bookService.create(data).subscribe(res => {
        this.router.navigate(['']);
    });
  }

}
