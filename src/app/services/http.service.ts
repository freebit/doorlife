import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { config } from '../appConfig';

import { Interior } from '../types/Interior';
import { Collection } from '../types/Collection';
import { Door } from '../types/Door';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getInteriors(): Observable<Interior[]>{
    return this.http.get(`${config.dataUrl}${config.mainService}?action=interiors`).map((resp:Response) => {

      return resp.json().map( this.addMainUrl );

    }).catch((error: any) => Observable.throw(error) );
  }

  getCollections(): Observable<Collection[]>{
    return this.http.get(`${config.dataUrl}${config.mainService}?action=collections`)
        .map((resp:Response) => resp.json().map(this.addMainUrl))
        .catch((error: any) => Observable.throw(error) );
  }

  getDoorsByCollection(id:number): Observable<Door[]>{
    return this.http.get(`${config.dataUrl}${config.mainService}?action=doors&collection=${id}`).map((resp:Response) => {

      return resp.json().map(this.addMainUrl);

    }).catch((error: any) => Observable.throw(error) );
  }

  private addMainUrl(it){
    it.imgSrc = `${config.dataUrl}${it.imgSrc}`;
    return it;
  }

}
