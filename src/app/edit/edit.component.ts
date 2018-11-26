import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private myTitle: string;
  private myContent: string;
  private category: string;
  private post: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private ps: PostService,private ts:Title) { }

  ngOnInit() {
    console.log("this is the ID " + this.route.snapshot.params['id']);
    //set the id = to the route id
    this.post.id = this.route.snapshot.params['id'];
    this.ps.getPost(this.route.snapshot.params['id']).subscribe(data => {
      this.post = data;
      this.myTitle = this.post.title;
    });
    this.ps.getPost(this.post.id).subscribe(data =>{
      this.category = data;
      console.log(data);
    });
    console.log("Data");
    this.ts.setTitle("Edit")
    this.ts.getTitle();
  }
  //need function to edit post on click
  editPosts(form: NgForm) {
    if(form.valid)
    {
    console.log("IN EDIT + PID " + this.post.id + " " + this.post.category);
    this.ps.editPost(this.post.id, form.value.title, form.value.content, this.category).subscribe(() => {
    });
   this.router.navigateByUrl('/');
  }
  else{
    alert("Post invalid content and title must be 5 character minimum");
    //need this as an error occurs where posts disappear or appear unedited
    this.router.navigateByUrl('/edit');
  }
  }
}
