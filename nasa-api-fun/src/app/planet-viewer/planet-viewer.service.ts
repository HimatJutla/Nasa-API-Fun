import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//const PASSENGER_API: string = '/api/passengers';
const url: string = 'https://api.nasa.gov/planetary/apod?api_key=ZmjdmWmvIrbnLmtkNTGG3ZtfP5oWqIWLYOLYEohq';
const nearEarthAsteroidsUrl: string = 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=ZmjdmWmvIrbnLmtkNTGG3ZtfP5oWqIWLYOLYEohq';

@Injectable()
export class PlanetViewerService {
  constructor(private http: Http) {}

  getNearEarthAsteroids(): Observable<any> {
      return this.http
      .get(nearEarthAsteroidsUrl)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  /*getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }*/

}