import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListPageServicesService } from '../../../_services/list-page-services.service';
import {ItemData} from '../../../_models/items';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  selectedItem: any;
   selectedItemDetails: ItemData |undefined;

  constructor(public activatedRoute: ActivatedRoute, public listPageService: ListPageServicesService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
   this.selectedItem = localStorage.getItem('selectedItem');
   this.selectedItemDetails = JSON.parse(this.selectedItem);
  };
}
