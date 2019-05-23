import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { environment } from './../../../environments/environment';

const API_URL = environment.ApiUrl;

@Injectable()

export class SingUpService {

    constructor(private http: HttpClient) {}


    checkUserNameTaken(userName: string) {
      return this.http.get(API_URL + '/user/exists/' + userName);
    }

    singup(newUser: NewUser) {
      return this.http.post(API_URL + '/user/signup', newUser);
    }

}
