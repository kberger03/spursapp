import { Component } from '@angular/core';
import { addGameModalForm } from './addGameModal.form';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'addGameModal-cmp',
  templateUrl: 'addGameModal.html'
})
export class addGameModalComponent { 

  constructor(private gamesService: GamesService){
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
    });
  }
  
  game = new addGameModalForm('', '', '', 0, 0);
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
        this.gamesService.addGame(value).subscribe(data => {
      console.log(data);
    });
  }

}