import { Component, OnInit } from '@angular/core';
import { ListPageServicesService } from '../../../app/_services/list-page-services.service';
import { List } from '../../_models/list';
import { ItemData } from '../../_models/items';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  lists: ItemData[] = [];
  form: FormGroup;
  current = 1;
  isSearch = false;
  totalItems: number;
  newSearchvalues: any;
  constructor(
    public listPageServices: ListPageServicesService,
    private formBuilder: FormBuilder
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = this.formBuilder.group({
      page: ['1', ],
      fromDate: ['', ],
      toDate: ['', ],
      order: ['', ],
      sort: ['', ],
      q: ['', ],
      answers: ['', ],
      closed: ['', ],
      title: ['', ],
      user: ['', ],
      url: ['', ],
      views: ['', ],
      wiki: ['', ],
    });
    this.getSearchList(this.form.value);
  }

  advanceSearch(value: any) {
    console.log(value);
    this.isSearch = !this.isSearch;
    this.getSearchList(value);
  }
  search() {
    this.isSearch = !this.isSearch;
  }
  getSearchList(searchValues){
  this.listPageServices.getAllSearchList(searchValues).subscribe((allList: List) => {
        this.lists = allList.items.map((data, index) => {
          return {
            title: data.title,
            avatar: data.owner.profile_image,
            answered: data.is_answered,
            answer_count: data.answer_count,
          };
        });
        this.totalItems = allList.items.length;
        return this.lists;
      });
  }
  pageIndexChanged(pageNumber:number){
    console.log(pageNumber);
    console.log(this.form.value);
    this.form.value['page'] = pageNumber
    console.log(this.form.value);
    this.getSearchList(this.form.value);
  }
}
