import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../product/services/product.service';
import { MsgService } from '../../shared/services/toastr.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading: Boolean = false;
  userId;
  products: Array<any>;
  product;
  submitting: Boolean = false;
  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public productService: ProductService,
    public toastr: MsgService
  ) {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['auth/login']);
    } else {
      this.userId = JSON.parse(localStorage.getItem('user'))._id;
    }


  }

  ngOnInit() {
    this.loading = true;
    this.product = new Product('');
    this.productService.list().subscribe(
      (data: any) => {
        this.loading = false;
        this.products = data;
      }, err => {
        this.loading = false;
        console.log('error is ', err);
      }
    )

  }


  isMine(s) {
    if (this.userId == s) {
      return true;
    } else {
      return false;
    }
  }

  deleteQuote(id, index) {
    this.productService.deletePost(id).subscribe(
      data => {
        this.toastr.showSuccess('Deleted!', '');
        this.products.splice(index, 1);
      }, error => {
        this.toastr.showError(error);
      }
    )
  }

  reportQuote(id) {
    this.productService.reportPost(id).subscribe(
      data => {
        this.toastr.showWarning('Reported!', 'Thankyou for the feedback');
      }, error => {
        this.toastr.showError(error);
      }
    )
  }

  add() {
    this.submitting = true;
    this.productService.add(this.product).subscribe(
      data => {
        this.submitting = false;
        this.products.unshift(data);
        this.toastr.showInfo("Quote added!", "You rock!");
        this.product = new Product('');
        this.product.newQuote = "";
      }, error => {
        this.submitting = false;
        this.toastr.showError(error);
        console.log('Err ', error);
      }
    )
  }


  timeoutHandler;


  public mouseup(likes, id) {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.productService.likePost(id, likes).subscribe(
        data => {

        }, error => {
          this.toastr.showError(error);
        }
      )
      this.timeoutHandler = null;
    }
  }

  public mousedown(likes, i) {
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
