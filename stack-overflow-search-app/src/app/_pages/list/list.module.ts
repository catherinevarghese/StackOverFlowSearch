import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import {SharedModule} from '../../_shared/shared.module';
import { AdvanceSearchFormComponent } from '../../_components/advance-search-form/advance-search-form.component';
import { ReactiveFormsModule} from '@angular/forms' 



@NgModule({
  declarations: [ListPageComponent, AdvanceSearchFormComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListModule { }
