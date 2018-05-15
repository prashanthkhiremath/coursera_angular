import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { LEADERS } from './../shared/leaders';
import { Leader } from './../shared/leader';

import { RestangularModule, Restangular} from 'ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
     return this.restangular.all('LEADERS').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('LEADERS').get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('LEADERS').getList({featured: true})
      .map(featuredleader => featuredleader[0]);
  }

}
