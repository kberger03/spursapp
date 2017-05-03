import { Component, Input } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'deleteGameModal-cmp',
  templateUrl: 'deleteGameModal.html'
})
export class deleteGameModalComponent { 

  @Input() game: any;

  constructor(private gamesService: GamesService){

  }

  submitted = false;

  deleteGame(value: any){
    this.submitted = true;
    console.log("Deletegamemodal value is " + value);
    console.log("Deletegamemodal value.id is " + value.id);
    this.gamesService.deleteGame(value).subscribe(data => {
      console.log(data);
      //$('#deleteGameModal').modal("hide");   
      //window.location.reload();
      // this.router.navigateByUrl('menu');
    });
    
  }

}