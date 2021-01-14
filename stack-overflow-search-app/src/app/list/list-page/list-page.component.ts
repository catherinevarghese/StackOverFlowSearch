import { Component, OnInit } from '@angular/core';
import {ListPageServicesService} from '../../../app/_services/list-page-services.service';
import {List} from '../../_models/list';
import {ItemData} from '../../_models/items';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  lists: ItemData[] = [];

  constructor(
    public listPageServices: ListPageServicesService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.listPageServices.getAllSearchList(1, 100, 'activity').subscribe((allList: List) => {
      this.lists = allList.items.map((data, index) => {
        return {
          title: data.title,
          avatar: data.owner.profile_image,
          answered: data.is_answered,
          answer_count: data.answer_count
        };
      });
      return this.lists;
    });
  }

}
