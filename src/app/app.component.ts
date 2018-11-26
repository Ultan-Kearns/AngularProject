import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ts:Title)
  {

  }
  ngOnInit() {
    //set title + get 
    this.ts.setTitle("Forum World Home");
    this.ts.getTitle();
  }
}
