import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { addGameModalForm } from './addGameModal.form';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'addGameModal-cmp',
  templateUrl: 'addGameModal.html'
})
export class addGameModalComponent { 

  constructor(private gamesService: GamesService, private router: Router){

  }
  
  game = new addGameModalForm('', '', '', 0, 0);

  onSubmit(value: any){
    this.gamesService.addGame(value).subscribe(data => {
      console.log(data);
      $('#addGameModal').modal("hide");   
      window.location.reload();
      // this.router.navigateByUrl('menu');
    });
    

  }

}