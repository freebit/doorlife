import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Interior } from '../types/Interior';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getInteriors(): Observable<Interior[]>{
    return this.http.get('interiors.json').map((resp:Response) => {

      let list = resp.json().data;
      let interiors :Interior[] = [];

      return interiors;

    }).catch((error: any) => Observable.throw(error) );
  }

}
