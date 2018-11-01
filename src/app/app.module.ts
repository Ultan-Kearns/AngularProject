import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      [BrowserAnimationsModule],
      MatMenuModule,
      MatIconModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
