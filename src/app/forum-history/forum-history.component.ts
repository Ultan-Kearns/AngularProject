import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-forum-history',
  templateUrl: './forum-history.component.html',
  styleUrls: ['./forum-history.component.css']
})
export class ForumHistoryComponent implements OnInit {

  constructor(private ts:Title) { }

  ngOnInit() {
    this.ts.setTitle("Forum History")
    this.ts.getTitle();
  }

}
