//**********************************************************************************
//NOTE: This file contains the User model and its properties
//**********************************************************************************
import {Reservation} from './reservation';
import {RsvpBook} from './rsvp-book';


export class User {
  id: string;
  local: any;
  facebook: any;
  google: any;
  email: string;
  phone: string;
  adminof: string [];
  reservations: Reservation [];
}
