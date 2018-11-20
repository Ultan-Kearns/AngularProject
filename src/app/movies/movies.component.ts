import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  constructor(private ps:PostService) {
      let forumTitle:String = "Welcome to the movie forum - BRING OUT THE POPCORN!";
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
  //add hide button to forums for each post
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
  this.ps.addPost(form.value.title, form.value.content,"Movies").subscribe();
  alert("post added please refresh page");
}

onDelete(id:String){
  console.log("Delete called "+ id);
  this.ps.deletePost(id).subscribe(() =>
  {
     this.ngOnInit();
  })
}
}
