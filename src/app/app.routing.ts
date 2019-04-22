import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';

const routerArr: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path:'auth',
        loadChildren:'./auth/auth.module#AuthModule'
    },
    {
        path:'user',
        loadChildren:'./user/user.module#UserModule'
    },
    {
        path:'product',
        loadChildren:'./product/product.module#ProductModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routerArr)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}