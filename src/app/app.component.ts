//**********************************************************************************
//NOTE: This is the root component for this app. It is the parent-most component which encapsulate all other child components such as UserComponent, ReservationsComponent, RsvpBooksComponent ...
//**********************************************************************************
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
