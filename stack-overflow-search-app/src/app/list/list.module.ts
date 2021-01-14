import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import {SharedModule} from '../../app/_shared/shared.module';





@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule { }
