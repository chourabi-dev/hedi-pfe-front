import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBookingReservationsComponent } from './doctor-booking-reservations.component';

describe('DoctorBookingReservationsComponent', () => {
  let component: DoctorBookingReservationsComponent;
  let fixture: ComponentFixture<DoctorBookingReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBookingReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorBookingReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
