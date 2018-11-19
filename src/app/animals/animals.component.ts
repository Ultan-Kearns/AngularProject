import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(private ps:PostService) {
    let forumTitle:String = "Welcome to the animals forum - Talk with fellow animal love!";
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
    this.ps.addPost(form.value.title, form.value.content).subscribe();
    alert("post added please refresh page");
  }

}
