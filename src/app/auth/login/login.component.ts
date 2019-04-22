import { Component, OnInit } from '@angular/core';
import { User, AuthService } from './../services/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MsgService } from '../../shared/services/toastr.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public submitting: boolean = false;
  user;
  username1: String;
  password1: String;
  hide = true;
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public authService: AuthService,
    private toastr: MsgService
  ) {
    this.user = new User({});
    this.activeRoute.queryParams.subscribe((params) => {
      this.user.setAttribute({ "username": params.username });
      this.username1 = params.username;
    });
  }

  ngOnInit() {
  }

  changedData(x: any) {
    let name = x.target.name;
    let value = x.target.value;
    this.user.setAttribute({ [name]: value });
  }

  public clickMe() {
    this.submitting = true;
    this.authService.login(this.user).subscribe(
      (data:any) => {
        this.submitting = false;
        localStorage.setItem('token',data.token);
        localStorage.setItem('user',JSON.stringify(data.user));
        this.router.navigate(['user/dashboard']);
        this.toastr.showSuccess('Hello ' + this.user.username,"");
      }, err => {
        this.submitting = false;
        this.toastr.showError(err);
        console.log('err is ', err);
      }
    )


    // console.log('a is ',a);
    // this.submitting=true;
    // this.user.getAttribute();


    // this.callNotePromise(this.user.username).then((data)=>{
    //   console.log('success state',data);
    // }).catch((err)=>{
    //   console.log('err state',err);
    // });

    // //subscriber section

    // //from umesh
    // let umesh = this.watchGameOfThrones('umesh').subscribe(
    //   (success)=>{
    //     console.log('success state ',success);
    //   },
    //   (err)=>{
    //     console.log('failure state',err);
    //   },
    //   (completed)=>{
    //     console.log('completed',completed);
    //   }
    // )

    // //from rajat
    // let rajat = this.watchGameOfThrones('rajat').subscribe(
    //   (success)=>{
    //     console.log('success state ',success);
    //     let episodeNum = success.split(' ')[1];
    //     console.log('Num only '+episodeNum);
    //   },
    //   (err)=>{
    //     console.log('failure state',err);
    //   },
    //   (completed)=>{
    //     console.log('completed',completed);
    //   }
    // )

    // alert("you clicked me");
  }

  callNotePromise(note) {
    console.log('promise');
    return new Promise((resolve, reject) => {
      if (note === 'js') {
        resolve({
          note: note
        });
      } else if (note === 'ts') {
        resolve({
          note: note
        });
      } else {
        reject('not found');
      }
    })
  }

  watchGameOfThrones(name) {
    console.log('subscriber name ', name);
    let i = 1;
    console.log('Observable');
    return Observable.create((observer) => {
      setInterval(() => {
        observer.next('episode ' + i);
        if (i == 10) {
          observer.complete();
        }
        i++;
      }, 2000);



      // if(note ==='js'){
      //   observer.next({
      //     note:note
      //   });
      // }else if(note === 'ts'){
      //   observer.next({
      //     note:note
      //   });
      // }else if(note==='rxjs'){
      //   observer.complete();
      // }else{
      //   observer.error('not found');
      // }
    });
  }


}
