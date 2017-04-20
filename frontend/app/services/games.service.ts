import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {

    url: string = '/api/v1/games';

    constructor(private http: Http){
        console.log('GamesService Initialized...');
    }

    getGames(){
        return this.http.get(this.url).map(res => res.json());
    }

    getGame(){
    }

    addGame(){    
    }

    deleteGame(){
    }

    updateGame(){
    }

}