import { Component, Input } from '@angular/core';
import { editGameModalForm } from './editGameModal.form';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'editGameModal-cmp',
  templateUrl: 'editGameModal.html'
})
export class editGameModalComponent { 

  @Input() game: any;

  constructor(private gamesService: GamesService){
    
  }

  submitted = false;

  onSubmit(value: any){
    this.submitted = true;
    this.gamesService.updateGame(value).subscribe(data => {
      $('#editGameModal').modal("hide");   
      //window.location.reload();
      // this.router.navigateByUrl('menu');
    });
    
  }

}