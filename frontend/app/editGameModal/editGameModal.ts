import { Component, Input } from '@angular/core';
import { editGameModalForm } from './editGameModal.form';
import { GamesService } from '../services/games.service';
// import { MenuComponent } from '../menu/menu';

@Component({
  moduleId: module.id,
  selector: 'editGameModal-cmp',
  templateUrl: 'editGameModal.html'
})
export class editGameModalComponent { 

  // @Input() game: any;

  constructor(private gamesService: GamesService){
    
  }

  game = new editGameModalForm('', '', '', 0, 0);
  submitted = false;

  onSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}