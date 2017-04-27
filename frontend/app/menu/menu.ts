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

  openEditGameModal(){
      $('#editGameModal').modal("show"); 
  }

}