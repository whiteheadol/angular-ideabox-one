import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ideabox-practice';

  showTitle() {
    return 'another title'
  }

}

// All of the logic for your main app would go here!
// The logic is kept out of the html file, compared to React where the JSX is embedded into the component file
