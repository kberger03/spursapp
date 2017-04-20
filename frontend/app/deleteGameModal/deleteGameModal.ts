import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'deleteGameModal-cmp',
  templateUrl: 'deleteGameModal.html'
})
export class deleteGameModalComponent { 

  constructor(private gamesService: GamesService){
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
    });
  }

}