import { Component, OnInit } from '@angular/core';
import {IBook} from "../post";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";

class PostService {
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: IBook;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getPostById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }
}
