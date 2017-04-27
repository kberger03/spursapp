import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {

    url: string = '/api/v1/games';
    oneGame: any = '';

    constructor(private http: Http){
        
    }

    getGames(){
        return this.http.get(this.url).map(res => res.json());
    }

    getGame(id: any){
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

    addGame(value: any){ 
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

    setOption(value: any){
        this.oneGame = value;
        console.log("value inside setoption " + value);
        console.log("onegame inside setoption " + this.oneGame);
    }

    getOption(){
        return this.oneGame;
    }

    deleteGame(){
    }

    updateGame(){
    }

}