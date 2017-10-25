import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GithubService {
    private username = 'keyur1363';
    private client_id = '70cf2ced0b41b93c821f';
    private client_secret = '04ede1bea6d8fdc69d10b5a4feaa47feaa5666a4';

    constructor(private _http: Http) {
        console.log('service init');

    }

    getUser() {
       return this._http.get('https://api.github.com/users/' + this.username)
            .map(response => response.json());
    }
    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username+'/repos')
            .map(response => response.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }

}