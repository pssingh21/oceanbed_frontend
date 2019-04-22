import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public token:String;
  constructor(
    public aciveRoute : ActivatedRoute
  ) { 
    this.token = this.aciveRoute.snapshot.params['token'];
    console.log('token is ',this.token);
  }

  ngOnInit() {
  }

}
