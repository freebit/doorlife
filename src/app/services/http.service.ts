import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Interior } from '../types/Interior';
import { Door } from '../types/Door';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getInteriors(): Observable<Interior[]>{
    return this.http.get('assets/json/interiors.json').map((resp:Response) => {

      let list = resp.json();

      return list;

    }).catch((error: any) => Observable.throw(error) );
  }

  getDoors(): Observable<Door[]>{
    return this.http.get('assets/json/doors.json').map((resp:Response) => {

      let list = resp.json();

      return list;

    }).catch((error: any) => Observable.throw(error) );
  }

}
