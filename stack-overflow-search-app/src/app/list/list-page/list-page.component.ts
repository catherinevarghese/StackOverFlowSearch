import { Component, OnInit } from '@angular/core';
import {ListPageServicesService} from '../../../app/_services/list-page-services.service';
import {List} from '../../_models/list';
import {ItemData} from '../../_models/items';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {

  lists: ItemData[] = [];
  form: FormGroup;
  constructor(
    public listPageServices: ListPageServicesService,
    private formBuilder: FormBuilder,
  ) { }

  // tslint:disable-next-line:typedef
ngOnInit() {
  this.form = this.formBuilder.group({
    childForm1: '',
    page: [null, [ Validators.required]],
    pageSize: [null, [Validators.required]],
    fromDate:  [null, [Validators.required]],
    toDate:  [null, [Validators.required]],
    order:  [null, [Validators.required]],
  });
  // this.listPageServices.getAllSearchList(1, 100, 'activity').subscribe((allList: List) => {
  //     this.lists = allList.items.map((data, index) => {
  //       return {
  //         title: data.title,
  //         avatar: data.owner.profile_image,
  //         answered: data.is_answered,
  //         answer_count: data.answer_count
  //       };
  //     });
  //     return this.lists;
  //   });
  }

  advanceSearch(value: any){
    console.log(value);
  }
}
