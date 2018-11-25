import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  private posts: any = [];
  private category:string = "Support";
  constructor(private ps: PostService) {
  }

  ngOnInit() {
    //get posts on intialization
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }
  onAddPost(form: NgForm) {
    console.log(form.value);
    if(form.valid)
    {
    this.ps.addPost(form.value.title, form.value.content,this.category).subscribe();
    alert("post added");
    form.reset();
    this.ngOnInit();
    }
    else{
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
  hideElement: Boolean;
  buttonText: string = "Show bugs to be fixed";
  userPass: String;
  password: String = "Developer"
  showBugs() {
    //add hide button to forums for each post
    //show bugs if user enters password 'Developer'
    if (this.hideElement != true) {
      this.userPass = prompt("Please enter password: ");
    }
    if (this.hideElement && this.userPass == this.password) {
      this.hideElement = false;
      this.buttonText = "Show Bugs to be fixed"
    }
    else {
      this.hideElement = true;
      this.buttonText = "Hide Bugs";
    }
    if (this.userPass != this.password) {
      alert("Wrong password entered");
      this.hideElement = false;
      this.buttonText = "Show Bugs"
    }
  }
}
