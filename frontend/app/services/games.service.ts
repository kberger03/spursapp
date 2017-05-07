// games.services.ts
//The service to manipulate games in the database
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {

    url: string = '/api/v1/games'; //so only one change needs to be made if modified

    constructor(private http: Http){
        
    }

//Requests all of the games in the database
    getGames(){
        return this.http.get(this.url).map(res => res.json());
    }

//requests a single game in the database
    getGame(id: any){
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

//adds a game to the database
    addGame(value: any){ 
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

//deltes a game from the database
    deleteGame(value: any){
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header }); 
        return this.http.delete(this.url + "/" + value, options).map(res => res.json());
    }

//updates a game from the database 
    updateGame(value: any){
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.put(this.url + "/" + value.id, valueString, options).map(res => res.json());
    }

}