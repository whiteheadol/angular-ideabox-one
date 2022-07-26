import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ideabox-practice';
  isBlue = true;
  inputValue = ''

  showTitle() {
    return 'another title'
  }

  handleClick() {
    this.isBlue = !this.isBlue;

    console.log(this.inputValue)
  }

}

// All of the logic for your main app would go here!
// The logic is kept out of the html file, compared to React where the JSX is embedded into the component file

// Does angular have built in dev tools?


// Interpolation Binding
// Property Binding w/ button
// Class Binding w/ the blue p tag
// Event Binding (tying to an event, ex: click) w/ color changing button
// Two Way Binding w/ the input

// Pipes are so cool! Look at more use cases! date is a cool place to start
