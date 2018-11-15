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
	 MatExpansionModule,
	 MatTooltipModule,
	 TooltipPosition
       } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { SupportComponent } from './support/support.component';
import { ForumHistoryComponent } from './forum-history/forum-history.component';
import {PostService} from './services/post.service';
import { FormsModule }   from '@angular/forms';
@NgModule({
    declarations: [
	AppComponent,
	BooksComponent,
	MoviesComponent,
	HistoryComponent,
	AnimalsComponent,
	GeneralDiscussionsComponent,
	SupportComponent,
	ForumHistoryComponent
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
	MatTooltipModule,
	AppRoutingModule,
	FormsModule
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
