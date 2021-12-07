import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  fromEditBook? :any = FormGroup;
  id: any;
  book : any[] = [];

  constructor(
    private fb : FormBuilder,
    private bookService: BookService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { 
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      //@ts-ignore
      this.id = +paramMap.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit(): void {
  }

  getById(id: any) {
    return this.bookService.findById(id).subscribe(res => {
      console.log(res);
      this.fromEditBook = this.fb.group({

        title: new FormControl(res.title),
        author: new FormControl(res.author),
        description: new FormControl(res.description),
      });
    })
  }

  update(id: any) {
    let book = this.fromEditBook.value;
    this.bookService.edit(id,book).subscribe(res=>{
      alert('Cap nhap thanh cong')
      this.router.navigate([''])
    });
  }

}
