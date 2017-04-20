import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'home-cmp',
  templateUrl: 'home.html'
})
export class HomeComponent { 
  
  constructor(private gamesService: GamesService){
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
    });
  }

}
