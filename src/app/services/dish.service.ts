import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from './../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import { RestangularModule, Restangular} from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
    // tslint:disable-next-line:no-shadowed-variable
    private ProcessHttpmsgService: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes()
      .map(dishes =>  dishes.map(dish => dish.id))
      .catch(error => error);
  }
}
