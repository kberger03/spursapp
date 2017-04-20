import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'menu-cmp',
  templateUrl: 'menu.html'
})
export class MenuComponent { 
  
  constructor(private gamesService: GamesService){
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
    });
  }

}