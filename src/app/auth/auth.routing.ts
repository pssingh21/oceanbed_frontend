import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routerArr: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'register',
        component: RegisterComponent
    }, 
    {
        path: 'forgot',
        component: ForgotPasswordComponent
    }, 
    {
        path:'reset/:token',
        component:ResetPasswordComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routerArr)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}