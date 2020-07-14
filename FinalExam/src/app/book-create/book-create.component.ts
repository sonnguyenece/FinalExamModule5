import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
  });
  private postId: number;
  message: string;
  book: any;

  constructor(
    private bookService: BookService,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.postId = params.id;
      this.bookService.getPostById(this.postId).subscribe(result => {
        this.bookForm.setValue(result);
      });
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.updatePost(value)
        .subscribe(next => {
          this.bookForm.reset({
            title: '',
            body: ''
          });
          this.message="BOOK CREATED!"
        }, error => console.log(error));
    }
  }
}
