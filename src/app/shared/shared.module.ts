import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { BaseService } from './services/base.services';
import { LoadingComponent } from './loading/loading.component';
import { MsgService } from './services/toastr.service';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    PageNotFoundComponent,
    LoadingComponent
  ],
  providers:[
    BaseService,
    MsgService
  ]
})
export class SharedModule { }
