import { Component, OnInit } from '@angular/core';
import { ListPageServicesService } from '../../../_services/list-page-services.service';
import { List } from '../../../_models/list';
import { ItemData } from '../../../_models/items';
import { SearchItems } from '../../../_models/list';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  lists: ItemData[] = [];
  form!: FormGroup;
  current = 1;
  isSearch = false;
  constructor(
    public listPageServices: ListPageServicesService,
    private formBuilder: FormBuilder
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = this.formBuilder.group({
      page: [''],
      order: [''],
      sort: [''],
      q: [''],
      answers: [''],
      closed: [''],
      title: [''],
      user: [''],
      url: [''],
      views: [''],
      wiki: [''],
      migrated: ['']
    });
    this.getSearchList(this.form.value);
  }
  // tslint:disable-next-line:typedef
  advanceSearch(value: any) {
    console.log(value);
    this.isSearch = !this.isSearch;
    this.form.value.page = 1;
    this.getSearchList(value);
    this.form.reset();
  }
  // tslint:disable-next-line:typedef
  search() {
    this.isSearch = !this.isSearch;
  }
  // tslint:disable-next-line:typedef
  getSearchList(searchValues: SearchItems) {
    this.listPageServices
      .getAllSearchList(searchValues)
      .subscribe((allList: List) => {
        this.lists = allList.items.map((data, index) => {
          return {
            title: data.title,
            avatar: data.owner.profile_image,
            answered: data.is_answered,
            answer_count: data.answer_count,
          };
        });
        console.log('the list of stackoverflow items', allList);
        return this.lists;
      });
  }
  // tslint:disable-next-line:typedef
  pageIndexChanged(pageNumber: number) {
    this.form.value.page = pageNumber;
    this.getSearchList(this.form.value); 
  }
}
