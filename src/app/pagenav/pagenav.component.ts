import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.css']
})
export class PagenavComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

    logout(){
      localStorage.clear();
      this.router.navigate(['/auth/login']);
    }

  constructor(private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public router: Router
  
  ) {}

}
