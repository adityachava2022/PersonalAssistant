import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';
  showMenu: boolean = false;

  showHideMenu():void {
    this.showMenu = !this.showMenu;
  }
}
