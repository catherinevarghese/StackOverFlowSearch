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
  getAllSearchList(page: number, pageSize: number, sort: string ){
    return this.http.get<any>(`${environment.BASEURL}?site=stackoverflow&page=${page}&pagesize=${pageSize}&sort=${sort}`)
    .pipe(map(x => {
      console.log(x);
        return x;
    }));
}
}
