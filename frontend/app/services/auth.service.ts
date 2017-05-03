import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    url: string = '/api/v1/auth';

    constructor(private http: Http){
        
    }

    authenticate(value: any){ 
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        console.log(valueString);
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

}