import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product.service';
import { Router } from '@angular/router';
import { MsgService } from '../../shared/services/toastr.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  loading:Boolean = false;
  products:Array<any>;
  userId;
  productsAvl = false;
  constructor(
    public productService: ProductService,
    public router: Router,
    public toastr:MsgService

  ) { 
    if (!localStorage.getItem('token')) {
      this.router.navigate(['auth/login']);
    }else{
      this.userId = JSON.parse(localStorage.getItem('user'))._id;
    }
  }

  ngOnInit() {
    this.loading = true;
    this.productService.listMine().subscribe(
      (data:any)=>{
        this.loading = false;
        console.log('data ',data);
        this.products = data;
        if(this.products.length > 0){
          this.productsAvl = true;
        }
      },err=>{
        this.loading = false;
        console.log('error is ',err);
      }
    )
  }


  deleteQuote(id,index){
    this.productService.deletePost(id).subscribe(
      data=>{
        this.toastr.showSuccess('Deleted!','');
        this.products.splice(index,1);
      },error=>{
        this.toastr.showError(error);
      }
    )
  }

  timeoutHandler;

 
  public mouseup(likes,id) {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.productService.likePost(id,likes).subscribe(
        data=>{

        },error=>{
          this.toastr.showError(error);
        }
      )
      this.timeoutHandler = null;
    }
  }

  public mousedown(likes,i) {
    this.timeoutHandler = setInterval(() => {
      likes += 1;
      this.products[i].likes = likes;
    }, 100);
  }

  public clickLike(likes, id,i) {
    likes += 1;
    this.products[i].likes = likes;
    this.productService.likePost(id, likes).subscribe(
      data => {

      }, error => {
        this.toastr.showError(error);
      }
    )
  }
}
