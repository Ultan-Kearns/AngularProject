import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../app/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //constructor not detecting this!
  private ps:PostService;
  //for showing and hiding postArea
    private hideElement:boolean;
    private postText:string = "Make Post";
    posts: any = [];
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
  ngOnInit() {

  }
  onAddPost(form: NgForm) {
    alert("Post added");
    this.ps.addPost(form.value.title, form.value.content).subscribe();
    console.log(form.value);
  }
}
