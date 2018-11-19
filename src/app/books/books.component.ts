import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private ps:PostService) {
   }
   posts:any = [];
   private hideElement:boolean;
   private postText:string = "Make Post";
   ngOnInit() {
    //get posts on intialization
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
  });
  }
  showPost(){
    //show post area to user
    if(this.hideElement)
    {
      this.hideElement = false;
      this.postText = "Make Post";
    }
    else
    {
      this.hideElement = true;
      this.postText = "Hide post area";
    }
  }
  onAddPost(form: NgForm) {
    console.log(form.value);
    this.ps.addPost(form.value.title, form.value.content,"Books").subscribe();
    alert("post added please refresh page");
  }

}
