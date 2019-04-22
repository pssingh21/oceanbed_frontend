import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { FormsModule } from '@angular/forms';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import {
  MatButtonModule,
  MatInputModule,
} from '@angular/material';
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ProductModule,
    FormsModule,
    MatButtonModule,
    MatInputModule, 
    TextareaAutosizeModule   
  ]
})
export class UserModule { }
