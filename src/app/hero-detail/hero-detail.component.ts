import { Component, Input, OnInit } from '@angular/core';
import { HeroI } from '../hero-i';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: HeroI;
  constructor() { }

  ngOnInit(): void {
  }

}
