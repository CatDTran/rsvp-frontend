import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpBookDetailComponent } from './rsvp-book-detail.component';

describe('RsvpBookDetailComponent', () => {
  let component: RsvpBookDetailComponent;
  let fixture: ComponentFixture<RsvpBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
