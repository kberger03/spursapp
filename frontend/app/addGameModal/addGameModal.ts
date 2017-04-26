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
  submitted = false;

  onSubmit(value: any){
    this.submitted = true;
    this.gamesService.addGame(value).subscribe(data => {
      console.log(data);
      $('#addGameModal').modal("hide");   
      this.router.navigate(['menu']);
    });
    

  }

}