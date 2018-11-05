import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { HistoryComponent } from './history/history.component';
import { AnimalsComponent } from './animals/animals.component';
const routes: Routes = [
  { path: 'movies', component: MoviesComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
