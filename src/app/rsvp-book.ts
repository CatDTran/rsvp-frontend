//**********************************************************************************
//NOTE: This file contains the RsvpBook model and its properties
//**********************************************************************************
import { User } from './user';
import { Reservation } from './reservation';

export class RsvpBook {
  admins: string [];
  companyName: string;
  address: string;
  phone: string [];
  clientUrl: string;
  employees: any [];
  services: any [];
  hours: any [];
  notice: string;
  holidays: Date [];
}
