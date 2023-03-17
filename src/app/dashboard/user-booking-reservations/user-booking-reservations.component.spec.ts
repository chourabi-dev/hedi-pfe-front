import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingReservationsComponent } from './user-booking-reservations.component';

describe('UserBookingReservationsComponent', () => {
  let component: UserBookingReservationsComponent;
  let fixture: ComponentFixture<UserBookingReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookingReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookingReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
