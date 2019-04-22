import { Component, OnInit } from '@angular/core';
import { MsgService } from '../../shared/services/toastr.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  likes = 150;
  constructor(
    public toastr: MsgService
  ) { }

  ngOnInit() {
  }

  timeoutHandler;

  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown(likes) {
    this.timeoutHandler = setInterval(() => {
      likes += 1;
      this.likes = likes;
    }, 100);
  }

  public clickLike(likes) {
    likes += 1;
    this.likes = likes;
  }

  reportQuote() {
        this.toastr.showWarning('Reported!', 'Thankyou for the feedback');
  }

}
