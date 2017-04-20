import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    url: string = '/api/v1/users';

    constructor(private http: Http){
        console.log('UsersService Initialized...');
    }

    getUsers(){
        return this.http.get(this.url).map(res => res.json());
    }

    getUser(){
    }

    addUser(){    
    }

    deleteUser(){
    }

}