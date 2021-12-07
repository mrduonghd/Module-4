import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book?: any;
  id?: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = paramMap.get('id')
      this.bookService.findById(this.id).subscribe(res => {
        this.book = res
        console.log(this.book)
      })
    })
  }

}
