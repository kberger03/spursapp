import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'menu-cmp',
  templateUrl: 'menu.html'
})
export class MenuComponent { 

  games: any = [];
  game: any = '';
  
  constructor(private gamesService: GamesService){

  }

  ngOnInit() {
    this.gamesService.getGames().subscribe(data => {
      this.games = data.objects;
    });
  }

  openEditGameModal(id: any){
    this.gamesService.getGame(id).subscribe(data => {
      this.game = data;
      console.log("openeditgame is " + data);
      $('#editGameModal').modal("show"); 
    });
  }

}