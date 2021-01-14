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
  getAllSearchList(){
    return this.http.get<any>(`${environment.BASEURL}`)
    .pipe(map(x => {
      console.log(x);
        return x;
    }));
}
}
