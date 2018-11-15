import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private hideElement:boolean;
  showPost(){
    if(this.hideElement)
    {
      this.hideElement = false;
    }
    else
    {
      this.hideElement = true;
    }
    alert(this.hideElement);
  }
}
