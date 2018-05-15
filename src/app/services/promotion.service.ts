import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular,
    // tslint:disable-next-line:no-shadowed-variable
    private ProcessHttpmsgService: ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('PROMOTIONS').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('PROMOTIONS', id).get();
}

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('PROMOTIONS').getList({featured: true})
    .map(promotions => promotions[0]); }
}
