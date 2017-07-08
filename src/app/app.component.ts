import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: "app-hero",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  pageTitle = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    HeroService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
