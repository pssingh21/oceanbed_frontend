export class Product{
    public newQuote:String;

    constructor(params:any){
        this.newQuote =params || '';
    }
}

export class Feedback{
    public msg:String;

    constructor(params:any){
        this.msg =params || '';
    }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {BaseService} from './../../shared/services/base.services';

@Injectable()
export class ProductService extends BaseService{
    url;
    constructor(
        public http:HttpClient
    ){
        super();
    }

    list(){
        return this.http.get(this.url + 'dashboard',this.setHeadersWithToken());
    }

    listMine(){
        return this.http.get(this.url + 'dashboard/myProfile',this.setHeadersWithToken());
    }

    add(data:any){
        return this.http.post(this.url + 'dashboard/addQuote', data ,this.setHeadersWithToken());
    }

    deletePost(id){
        return this.http.delete(this.url + 'dashboard/deleteQuote/'+ id,this.setHeadersWithToken());
    }

    likePost(id,likeNumber){
        return this.http.put(this.url + 'dashboard/like/'+id,{likeNumber:likeNumber},this.setHeadersWithToken());
    }

    reportPost(id){
        return this.http.put(this.url + 'dashboard/report/'+id,{},this.setHeadersWithToken());
    }
    
    feedback(data:any){
        return this.http.post(this.url + 'dashboard/feedback', data ,this.setHeadersWithToken());
    }
}