import { Component, OnInit } from '@angular/core';
import {ListPageServicesService} from '../../../app/_services/list-page-services.service';
import {List} from '../../_models/list';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(
    public listPageServices: ListPageServicesService
  ) { }

  ngOnInit() {
    this.listPageServices.getAllSearchList().subscribe((allList: List) => {
      console.log(allList);
    });
  }

}
