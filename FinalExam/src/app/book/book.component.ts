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

  deletePost(i) {
    const book = this.bookList[i];

    if (confirm("Are you sure to delete id: "+book.title)) {
    this.bookService.deletePost(book.id).subscribe(() => {
      this.bookList = this.bookList.filter(t => t.id !== book.id);
    })
    }
  }
}
