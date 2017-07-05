//**********************************************************************************
//NOTE: This file contains the Reservation model and its properties
//**********************************************************************************
import { User } from './user';
import { RsvpBook } from './rsvp-book';

export class Reservation {
  bookedBy: any;
  bookedFor: any;
  bookBelong: any;
  description: string;
  service: string;
  startTime: Date;
  endTime: Date;
}
