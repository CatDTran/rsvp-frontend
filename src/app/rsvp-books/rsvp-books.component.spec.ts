import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpBooksComponent } from './rsvp-books.component';

describe('RsvpBooksComponent', () => {
  let component: RsvpBooksComponent;
  let fixture: ComponentFixture<RsvpBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
