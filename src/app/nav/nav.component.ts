import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //liste des liens a afficher
  links = [
    {route: '/dashboard', text: 'Dashboard'},
    {route: '/heroes', text: 'Heroes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
