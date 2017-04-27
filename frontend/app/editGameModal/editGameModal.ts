import { Component } from '@angular/core';
import { editGameModalForm } from './editGameModal.form';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'editGameModal-cmp',
  templateUrl: 'editGameModal.html'
})
export class editGameModalComponent { 

  oneGame: any = '';
  singularGame: any = '';

  constructor(private gamesService: GamesService){
    this.oneGame = this.gamesService.getOption();
    this.gamesService.getGame(this.oneGame).subscribe(data => {
      this.singularGame = data;
      console.log("singular game is " + data);
    });
  }

  game = new editGameModalForm('', '', '', 0, 0);
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}