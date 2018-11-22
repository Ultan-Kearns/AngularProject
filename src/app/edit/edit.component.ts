import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myTitle: string;
  myContent: string;
  category: string;
  post: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private ps: PostService) { }

  ngOnInit() {
    console.log( "this is the ID " + this.route.snapshot.params['id']);
    this.post.id = this.route.snapshot.params['id'];
    this.ps.getPost(this.route.snapshot.params['id']).subscribe(data => {
      this.post = data;
      console.log(this.post + "POST");
      this.myTitle = this.post.title;
      console.log("message" + this.post.id);
    });
  }
  //need function to edit post on click
  editPosts(form: NgForm) {
    console.log("IN EDIT + PID " + this.post.id);
    this.ps.editPost(this.post.id, form.value.title, form.value.content, this.category).subscribe(() => {
      this.router.navigate['/'];
    });
  }
}
