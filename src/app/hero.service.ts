import { Injectable } from '@angular/core';
import { HeroI } from './hero-i';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
/* la plupart du temps, un service propose
   le CRUD sur des données (API):
   - lire la liste des données
   - récupérer une donnée
   - modifier une donnée
   - ajouter une donnée
   - supprimer une donnée */
export class HeroService {

  // injection du service message dans le service hero
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<HeroI[]> {
    //return HEROES;
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  /* récupération d'un Hero en fonction de son id */
  getHero(id: number): Observable<HeroI> {
    const hero = HEROES.find( h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
