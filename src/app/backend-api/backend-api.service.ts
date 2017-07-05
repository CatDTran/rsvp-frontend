//**********************************************************************************
//NOTE: THis file deals with all http comunications with the server. Components will delegate all server comunications to this service.
//**********************************************************************************
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
  user: User;
  resevations: Reservation [];
  rsvpBooks: RsvpBook [];

  constructor(private http: Http) {}

  //=================================================================================
  //User related http comunications =================================================
  getUser(id): Observable<User> {
    return this.http.get(this.backEndUrl + '/users/id')
                    .map(this.extractData)
                    .catch(this.handleError)
  }


  //=================================================================================
  //Reservation related http comunications ==========================================



  //=================================================================================
  //RsvpBook related http comunications =============================================



  // helper method to parse json data
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  // helper method to handle error
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
