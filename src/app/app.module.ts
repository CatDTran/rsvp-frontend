import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
    MdButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
