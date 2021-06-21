import { Component, OnInit } from '@angular/core';
import { HeroI } from '../hero-i';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

 /* hero: HeroI = {
    id: 1,
    name: 'Windstorm'
  };*/

  /* ? car variable vide au départ. Valeur sur click */
  selectedHero?: HeroI;
  heroes: HeroI[] = [];

  constructor(private HeroService: HeroService,
              private messageService: MessageService) { }



  onSelect(hero:HeroI): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }


  ngOnInit(): void {
    this.HeroService.getHeroes()
    .subscribe((heroes) => { this.heroes = heroes });
  }

}
