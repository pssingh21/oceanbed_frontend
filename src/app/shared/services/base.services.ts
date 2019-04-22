import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class BaseService{
    public url;
    constructor(){
        this.url = environment.baseUrl;
    }

    setUrl(url:String){
        this.url = this.url + url + '/';
    }

    setHeadersWithToken(){
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization':localStorage.getItem('token')
            })
        }
        return httpOptions;
    }

    setHeaders(){
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }
        return httpOptions;
    }
}