import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
@Component({
  selector: 'app-general-discussions',
  templateUrl: './general-discussions.component.html',
  styleUrls: ['./general-discussions.component.css']
})
export class GeneralDiscussionsComponent implements OnInit {
  posts:any = [];

  constructor(private ps:PostService) {
    let forumTitle:String = "Welcome to the General Discussions forum - A place to relax and chit chat";

  }

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
  });
  }

}
