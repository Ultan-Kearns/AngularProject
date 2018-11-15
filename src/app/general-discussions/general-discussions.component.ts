import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';
@Component({
  selector: 'app-general-discussions',
  templateUrl: './general-discussions.component.html',
  styleUrls: ['./general-discussions.component.css']
})
export class GeneralDiscussionsComponent implements OnInit {

  constructor(private service:PostService) {
    let forumTitle:String = "Welcome to the General Discussions forum - A place to relax and chit chat";

  }

  ngOnInit() {
  }
  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content).subscribe();

    console.log(form.value);
    form.resetForm();
  }
}
