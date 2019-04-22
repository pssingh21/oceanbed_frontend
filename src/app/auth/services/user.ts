export class User{
    public username:String;
    public password:String;
    public email:String;

    constructor(params:any){
        for(let key of params){
            this[key] = params[key] || '';
        }
    }

    setAttribute(params:any){
        for(let key in params){
            this[key] = params[key] || '';
        }
    }
}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BaseService } from '../../shared/services/base.services';

@Injectable()
export class AuthService extends BaseService {
    constructor(
        public http:HttpClient
    ){
        super();
        this.setUrl('auth');
    }

    getUpperCase(name:String){
        return name.toUpperCase();
    }

    login(data:User){
        //using promise
        // return new Promise((resolve,reject)=>{
        //     this.http.post('https://oceanbed-backend.herokuapp.com/auth/login',data,{
        //     headers: new HttpHeaders({
        //         'Content-Type': ' application/json'
        //     })
        // }).subscribe(
        //     data=>{
        //         resolve(data);
        //     },
        //     err=>{
        //         reject(err);
        //     }
        // )
        // })

        //using observable
        return this.http.post(this.url + 'login',data,this.setHeaders());
        
    }

    register(data:User){
        return this.http.post(this.url + 'register',data,this.setHeaders());
    }

    isLoggedIn(){
        let loggedIn = localStorage.getItem('token');
        if(loggedIn){
            return true;
        }
        return false;
    }

}