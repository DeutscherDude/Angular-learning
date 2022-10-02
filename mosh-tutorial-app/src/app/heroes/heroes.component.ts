import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private readonly heroService: HeroService,
    private readonly messageService: MessageService
  ) {}

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=$(hero.id)`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
