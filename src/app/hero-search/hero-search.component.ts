import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroI } from '../hero-i';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<HeroI[]>;
  //subject est un type d'Observable
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  //search: ajoute le terme rechercher dans le flux de l'observable
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //on attends 300ms entre chaque saisie
      debounceTime(300),
      //ignorer nouveau terme de recherche si idem ancien
      distinctUntilChanged(),
      // appel de l'API à chaque fois que la recherche change
      switchMap((term: string) => this.heroService.searchHero(term)),
    );
  }

}
