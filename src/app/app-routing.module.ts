//**********************************************************************************
//NOTE: This file responsible for all the routings for this app. It decides which Component to show depends on user's interaction through out the app
//**********************************************************************************
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { RsvpBooksComponent } from './rsvp-books/rsvp-books.component';
import { RsvpBookDetailComponent } from './rsvp-book-detail/rsvp-book-detail.component';

const appRoutes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'reservations', component: ReservationsComponent },
  {path: 'reservationDetail', component: ReservationDetailComponent },
  {path: 'books', component: RsvpBooksComponent},
  {path: 'bookDetail', component: RsvpBookDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
