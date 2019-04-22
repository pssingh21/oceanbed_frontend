import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { FeedbackComponent } from './feedback/feedback.component';

const productRoute: Routes = [
    {
        path:'list',
        component:ListProductComponent
    },{
        path:'feedback',
        component: FeedbackComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(productRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class ProductRoutingModule{

}