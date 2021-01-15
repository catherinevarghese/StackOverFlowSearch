import { Component, OnInit } from '@angular/core';
import { ListPageServicesService } from '../../../_services/list-page-services.service';
import { List } from '../../../_models/list';
import { ItemData } from '../../../_models/items';
import { SearchItems } from '../../../_models/list';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  selectedItem: ItemData | undefined;
  isLoading = true;
  constructor(
    public listPageServices: ListPageServicesService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = this.formBuilder.group({
      page: [''],
      order: [''],
      sort: ['activity'],
      q: [''],
      answers: [''],
      closed: [''],
      title: [''],
      user: [''],
      url: [''],
      views: [''],
      wiki: [''],
      migrated: [''],
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
            user_id: data.owner.user_id,
            question_id: data.question_id,
            link: data.link,
            display_name: data.owner.display_name,
            tags: data.tags,
            view_count: data.view_count,
            content_license: data.content_license,
          };
        });
        this.isLoading = false;
        return this.lists;
      });
  }
  // tslint:disable-next-line:typedef
  navigateToDetailPage(id: number) {
    this.selectedItem = this.lists.find((item) => item.question_id === id);
    localStorage.setItem('selectedItem', JSON.stringify(this.selectedItem));
    this.router.navigateByUrl('details/' + id);
  }
  // tslint:disable-next-line:typedef
  pageIndexChanged(pageNumber: number) {
    this.form.value.page = pageNumber;
    this.getSearchList(this.form.value);
  }
}
