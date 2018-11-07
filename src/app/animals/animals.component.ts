import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor() {
    let forumTitle:String = "Welcome to the animals forum - Talk with fellow animal love!";
   }

  ngOnInit() {
  }

}
