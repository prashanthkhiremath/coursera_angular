import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Http, Response } from '@angular/http';
import { Feedback } from './../shared/feedBack';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedBack(feedback): Observable<Feedback> {
      return this.restangular.all('feedback').post(feedback);
  }
}
