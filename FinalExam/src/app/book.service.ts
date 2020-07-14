import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "./post";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }
  getPosts(count = 10): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL);
  }
  getPostById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }
  createPost(post: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, post);
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updatePost(post: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, post.id);
  }
}
