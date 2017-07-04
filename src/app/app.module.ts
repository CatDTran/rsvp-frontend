import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RsvpBooksComponent } from './rsvp-books/rsvp-books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerNavigationComponent } from './hamburger-navigation/hamburger-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReservationsComponent,
    RsvpBooksComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
