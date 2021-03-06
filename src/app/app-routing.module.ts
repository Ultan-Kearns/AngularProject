import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { HistoryComponent } from './history/history.component';
import { AnimalsComponent } from './animals/animals.component';
import {GeneralDiscussionsComponent} from './general-discussions/general-discussions.component';
import { ForumHistoryComponent } from './forum-history/forum-history.component';
import { SupportComponent } from './support/support.component';
import { EditComponent } from '../app/edit/edit.component';
const routes: Routes = [
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'history',component: HistoryComponent
  },
  {
    path: 'animals', component: AnimalsComponent
  },
  {
    path: 'generalDiscussions', component: GeneralDiscussionsComponent
  },
  {
    path: 'forumHistory', component: ForumHistoryComponent
  },
  {
    path: 'support', component: SupportComponent,data:{title:"Support"}
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
