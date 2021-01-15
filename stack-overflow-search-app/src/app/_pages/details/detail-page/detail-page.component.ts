import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListPageServicesService } from '../../../_services/list-page-services.service';
import {ItemData, Answers} from '../../../_models/items';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  selectedItem: any;
  selectedItemDetails: ItemData;
  answerList: any;
  constructor(public activatedRoute: ActivatedRoute, public listPageService: ListPageServicesService) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
   this.selectedItem = localStorage.getItem('selectedItem');
   this.selectedItemDetails = JSON.parse(this.selectedItem);
   this.listPageService.getAllAnswers(this.selectedItemDetails.question_id).subscribe((answers) => {
    this.answerList = answers.items.map((data, index) => {
      return {
       avatar: data.owner.profile_image,
       display_name: data.owner.display_name,
       body:  this.htmlToPlaintext( data.body )
      };
    });
    console.log('answer,',this.answerList);
    return this.answerList;
  });
  }
   htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
}