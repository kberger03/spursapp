import { Component } from '@angular/core';
import { editGameModalForm } from './editGameModal.form';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'editGameModal-cmp',
  templateUrl: 'editGameModal.html'
})
export class editGameModalComponent { 

  constructor(private gamesService: GamesService){
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
    });
  }

  game = new editGameModalForm('', '', '', 0, 0);
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}