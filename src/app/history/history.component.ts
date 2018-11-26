import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private ps: PostService, private ts: Title) {
    let forumTitle: String = "Welcome to the history forum - History repeats itself";
  }
  private posts: any = [];
  private hideElement: boolean;
  private postText: string = "Make Post";
  private category: string = "History"
  ngOnInit() {
    //get posts on intialization
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
    this.ts.setTitle(this.category)
    this.ts.getTitle();
  }
  showPost() {
    //show post area to user
    if (this.hideElement) {
      this.hideElement = false;
      this.postText = "Make Post";
    }
    else {
      this.hideElement = true;
      this.postText = "Hide post area";
    }
  }
  onAddPost(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
      form.reset();
      alert("post added");
      this.ngOnInit();
    }
    else {
      alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER")
    }
  }

  onDelete(id: String) {
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() => {
    })
    alert("deleted post: " + id);
    this.ngOnInit();
  }
}
