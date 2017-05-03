import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
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

    getUser(id: any){
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

    addUser(value: any) { 
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json());   
    }

}