import {Component, OnInit} from '@angular/core';
import {IBook} from "../post";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: IBook[] = [];
  bookQuantity: number;

  constructor(private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    this.bookService
      .getPosts()
      .subscribe(next => (this.bookList = next
      ) , error => (this.bookList = []));
    this.bookQuantity = this.bookList.length
  }

  deletePost(i: number) {

  }
}
