import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  constructor(private ps: PostService, private route: ActivatedRoute, private ts: Title) {
    let forumTitle: String = "Welcome to the movie forum - BRING OUT THE POPCORN!";
  }
  private posts: any = [];
  private category: string = "Movies";
  private hideElement: boolean;
  private postText: string = "Make Post";
  ngOnInit() {
    //get posts on intialization
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
    this.ts.setTitle(this.category)
    this.ts.getTitle();
  }
  showPost() {
    //add hide button to forums for each post
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
