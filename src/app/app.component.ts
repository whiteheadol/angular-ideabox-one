import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ideabox-practice';
  isBlue = true

  showTitle() {
    return 'another title'
  }

  handleClick() {
    this.isBlue = !this.isBlue;
  }

}

// All of the logic for your main app would go here!
// The logic is kept out of the html file, compared to React where the JSX is embedded into the component file


// Interpolation Binding
// Property Binding w/ button
// Class Binding w/ the blue p tag
// Event Binding (tying to an event, ex: click) w/
