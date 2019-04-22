import { Component } from '@angular/core';
import { AuthService } from './auth/services/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oceanbed';
  loggedIn;
  constructor(
    public router: Router
  ){
    if (!localStorage.getItem('token')) {
      this.loggedIn = false;
    }else{
      this.loggedIn=true;
    }
  }
  ngOnInit(){
    localStorage.clear();
  }

  logout(){
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/auth/login']);
    
  }

}
