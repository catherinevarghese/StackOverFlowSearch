import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListPageServicesService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllSearchList(formValues: any){
    return this.http.get<any>(`${environment.BASEURL}?site=stackoverflow&page=${formValues.page}&pagesize=${formValues.pageSize}&sort=${formValues.sort}
    &fromDate=${formValues.fromDate}&toDate=${formValues.toDate}&order=${formValues.order}&q=${formValues.q}&answers=${formValues.answers}
    &closed=${formValues.closed}&title=${formValues.title}&user=${formValues.user}&url=${formValues.url}&views=${formValues.views}
    &wiki=${formValues.wiki}`)
    .pipe(map(x => {
      console.log(x);
        return x;
    }));
}
}
