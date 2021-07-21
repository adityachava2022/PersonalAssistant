import { Component, OnInit } from '@angular/core';
import { NavItem } from "../shared/models/NavItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  items: NavItem[] = [];
  constructor(private route: Router) {
    this.items = [
      {name: 'Home', value: '/home'},
      {name: 'Todo', value: '/todos'},
      {name: 'Goals', value: '/goals'},
      {name: 'Affirmations', value: '/affirmations'},
      {name: 'songs', value: '/songs'},
      {name: 'dreams', value: '/dreams'}
    ];
  }

  ngOnInit(): void {
  }

  onClick($event: MouseEvent, value: string) {
        this.route.navigate([value]);
  }
}
