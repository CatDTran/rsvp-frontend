/**********************************************************************************
NOTE: This is the root module for this app. Every Angular 2 app must have a root module which bring all components, services, routings ... together.
One module to rule them all,
one module to find them,
one module to bring them all,
and in the darkness bind them.
**********************************************************************************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import 'hammerjs';  // gesture support for some Angular Material components

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendApiService } from './backend-api/backend-api.service';

import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RsvpBooksComponent } from './rsvp-books/rsvp-books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerNavigationComponent } from './hamburger-navigation/hamburger-navigation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { RsvpBookDetailComponent } from './rsvp-book-detail/rsvp-book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReservationsComponent,
    RsvpBooksComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerNavigationComponent,
    ReservationDetailComponent,
    RsvpBookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ BackendApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
