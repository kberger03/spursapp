// menu.ts
// main admin page for manipulating data 
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'menu-cmp',
  templateUrl: 'menu.html'
})
export class MenuComponent { 

  games: any = [];
  game: any = '';
  selectedGame: any = '';
  deletedGame: any = '';
  
  constructor(private gamesService: GamesService, private router: Router){

  }

// on load of page
  ngOnInit() {
    this.gamesService.getGames().subscribe(data => {
      this.games = data.objects;
    });
  }

// opens edit game modal
  openEditGameModal(game: any){
      this.selectedGame = game;
      $('#editGameModal').modal("show"); 
  }

// opens delete gmae modal
    openDeleteGameModal(game: any){
      this.deletedGame = game;
      $('#deleteGameModal').modal("show"); 
  }

// actions for edit game submission
   onEditSubmit(value: any){
    this.gamesService.updateGame(value).subscribe(data => {
      $('#editGameModal').modal("hide");
      // this.router.navigateByUrl('menu'); //may need later
    });
    
  }

//actions for closing edit game modal without saving
  closeEditGameModal(){
      // this.router.navigateByUrl('/menu'); //may need later
      $('#editGameModal').modal("hide");
      window.location.reload();
  }

//actions for delete game modal 
   deleteGame(value: any){
    this.gamesService.deleteGame(value).subscribe(data => {
      console.log(data);
      $('#deleteGameModal').modal("hide");   
      window.location.reload();
      // this.router.navigateByUrl('menu');
    });
   }

}