import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerNavigationComponent } from './hamburger-navigation.component';

describe('HamburgerNavigationComponent', () => {
  let component: HamburgerNavigationComponent;
  let fixture: ComponentFixture<HamburgerNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
