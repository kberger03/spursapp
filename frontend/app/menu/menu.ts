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

  ngOnInit() {
    this.gamesService.getGames().subscribe(data => {
      this.games = data.objects;
    });
  }

  openEditGameModal(game: any){
      this.selectedGame = game;
      $('#editGameModal').modal("show"); 
  }

    openDeleteGameModal(game: any){
      this.deletedGame = game;
      $('#deleteGameModal').modal("show"); 
  }

   onEditSubmit(value: any){
    this.gamesService.updateGame(value).subscribe(data => {
      $('#editGameModal').modal("hide");   
      window.location.reload();
      // this.router.navigateByUrl('menu');
    });
    
  }

  closeEditGameModal(){
      // this.router.navigateByUrl('/menu');
      $('#editGameModal').modal("hide");
      window.location.reload();
  }

   deleteGame(value: any){
    this.gamesService.deleteGame(value).subscribe(data => {
      console.log(data);
      $('#deleteGameModal').modal("hide");   
      window.location.reload();
      // this.router.navigateByUrl('menu');
    });
   }

}