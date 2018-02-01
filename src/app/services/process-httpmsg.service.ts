import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProcessHttpmsgService {

  constructor() { }

  public extractData(res: Response ) {
    const body = res.json();

    return body || { };
  }

}
