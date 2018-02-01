import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from './../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  constructor(private http: Http,
    // tslint:disable-next-line:no-shadowed-variable
    private ProcessHttpmsgService: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
      .map(res => this.ProcessHttpmsgService.extractData(res));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
      .map(res => this.ProcessHttpmsgService.extractData(res));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
    .map(res => this.ProcessHttpmsgService.extractData(res)[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes =>  dishes.map(dish => dish.id));
  }
}
