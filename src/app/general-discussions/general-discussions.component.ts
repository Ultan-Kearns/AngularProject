import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-general-discussions',
  templateUrl: './general-discussions.component.html',
  styleUrls: ['./general-discussions.component.css']
})
export class GeneralDiscussionsComponent implements OnInit {
  private posts:any = [];
  private hideElement:boolean;
  private postText:string = "Make Post";
  private category:string = "General";
  constructor(private ps:PostService) {
    let forumTitle:String = "Welcome to the General Discussions forum - A place to relax and chit chat";

  }

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
    this.ps.addPost(form.value.title, form.value.content,this.category).subscribe();
    alert("post added");
    form.reset();
    this.ngOnInit();
  }

  onDelete(id:String){
    console.log("Delete called "+ id);
    this.ps.deletePost(id).subscribe(() =>
    {
    })
    alert("deleted post: " + id);
    this.ngOnInit();
  }
}
