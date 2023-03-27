import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingPaymentAndServicesComponent } from './user-booking-payment-and-services.component';

describe('UserBookingPaymentAndServicesComponent', () => {
  let component: UserBookingPaymentAndServicesComponent;
  let fixture: ComponentFixture<UserBookingPaymentAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookingPaymentAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookingPaymentAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
