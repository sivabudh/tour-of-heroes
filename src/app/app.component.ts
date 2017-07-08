import {Component} from "@angular/core";

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Four of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
