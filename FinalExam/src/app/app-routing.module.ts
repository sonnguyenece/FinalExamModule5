import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [{
  path: 'book',
  component: BookComponent
}, {
  path: 'book/:id',
  component: BookDetailComponent
}, {
  path: 'book/:id/edit',
  component: BookEditComponent
},
  {
    path: "",
    redirectTo: "book",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
