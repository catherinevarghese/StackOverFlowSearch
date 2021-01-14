import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../_shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NzButtonModule
  ]
})
export class AdvancedSearchFormModule { }
