import { Component, OnInit } from '@angular/core';
import {User, AuthService} from './../services/user';
import { Router } from '@angular/router';
import { MsgService } from '../../shared/services/toastr.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public confirmPassword:String;
  user;
  public submitting: boolean = false;
  public match:boolean=false;
  hide = true;
  constructor(
    public router:Router,
    public authService:AuthService,
    public toastr: MsgService
  ) {
    this.user = new User({});
   }

  ngOnInit() {
  }

  clickMe(){
    // this.user.getAttribute();
    this.submitting = true;
      
      
    this.authService.register(this.user).subscribe(
      data=>{
        this.submitting = false;
        this.toastr.showSuccess("Registered Successfully", "Welcome to the squad " + this.user.username + "!");
        this.router.navigate(['/auth/login'],{
          queryParams:{
            username:this.user.username
          }
        });
        console.log('data is ',data);
      },error=>{
        this.submitting = false;
        this.toastr.showError(error);
        console.log('err is ',error);
      }
    )
  }

  passMatch(){
    if(this.user.password==this.confirmPassword){
      this.match=true;
    }else{
      this.match=false;
    }
  }

  changedData(x:any){
    let name = x.target.name;
    let value = x.target.value;
    this.user.setAttribute({[name]:value});
  }

  resetForm(){
    this.user.setAttribute({username:null});
    this.user.setAttribute({password:null});
    this.confirmPassword=null;
    this.user.setAttribute({email:null});
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
