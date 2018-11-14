import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
function showPost(){
  alert("Hi")
  var show = document.getElementById("postArea");
  if(show.style.hidden == true)
  {
    show.style.hidden = false;
  }
  else
  {
    show.style.content = "Hide posts";
    show.style.hidden = true;
  }
}
