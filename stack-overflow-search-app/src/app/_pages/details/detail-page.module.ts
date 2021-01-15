import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../_shared/shared.module';
import { DetailPageRoutingModule } from './detail-page-routing.module';
import {DetailPageComponent} from './detail-page/detail-page.component';

@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    SharedModule
  ]
})
export class DetailPageModule { }
