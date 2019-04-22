import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const userArr:Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(userArr)],
    exports:[RouterModule]
})
export class UserRoutingModule{

}