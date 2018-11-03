import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { HistoryComponent } from './history/history.component';
import { AnimalsComponent } from './animals/animals.component';
import { GeneralDiscussionsComponent } from './general-discussions/general-discussions.component';
import { MatInputModule,
	 MatMenuModule,
	 MatCardModule,
	 MatButtonModule,
	 MatIconModule,
	 MatToolbarModule,
	 MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MoviesComponent,
    HistoryComponent,
    AnimalsComponent,
    GeneralDiscussionsComponent
  ],
  imports: [
      BrowserModule,
      [BrowserAnimationsModule],
      MatIconModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatExpansionModule,
      MatMenuModule,
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
