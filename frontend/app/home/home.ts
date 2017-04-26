import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  moduleId: module.id,
  selector: 'home-cmp',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit { 
  
  games: any = [];

  constructor(private gamesService: GamesService){
    
  }

  ngOnInit() {
        this.gamesService.getGames().subscribe(data => {
      this.games = data.objects;
    });
  }

}

