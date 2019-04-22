import { Component, OnInit } from '@angular/core';
import { Feedback, ProductService } from '../services/product.service';
import { MsgService } from '../../shared/services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback;
  userId;
  submitting:Boolean = false;
  constructor(
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
    this.feedback = new Feedback('');
  }

  add() {
    
    this.submitting = true;
    
    this.productService.feedback(this.feedback).subscribe(
      data => {
        this.submitting = false;
        this.toastr.showInfo("Feedback sent!", "Thankyou for sending");
        this.feedback = new Feedback('');
        this.feedback.msg = "";
      }, error => {
        this.submitting = false;
        this.toastr.showError(error);
        console.log('Err ', error);
      }
    )
  }
}
