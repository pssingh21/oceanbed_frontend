import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductRoutingModule } from './product.routing';
import { BaseService } from '../shared/services/base.services';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import {
  MatButtonModule, MatInputModule,
} from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [ListProductComponent, EditProductComponent, SearchProductComponent, FeedbackComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
    FormsModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    TextareaAutosizeModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
