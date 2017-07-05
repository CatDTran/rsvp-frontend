import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';

import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User }                     from '../user';
import { Reservation }              from '../reservation';
import { RsvpBook }                  from '../rsvp-book';

@Injectable()
export class BackendApiService {

  private backEndUrl = 'http://api.inkeepme.com'; // base url where API will be served

  constructor(private http: Http) { }

  //=================================================================================
  //User related http comunications =================================================
  getUser(): Observable<User> {
    
  }
}
