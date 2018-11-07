import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  constructor() {
      let forumTitle:String = "Welcome to the movie forum - BRING OUT THE POPCORN!";
  }

  ngOnInit() {
  }
}
