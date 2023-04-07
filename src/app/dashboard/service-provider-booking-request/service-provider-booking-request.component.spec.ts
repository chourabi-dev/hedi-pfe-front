import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderBookingRequestComponent } from './service-provider-booking-request.component';

describe('ServiceProviderBookingRequestComponent', () => {
  let component: ServiceProviderBookingRequestComponent;
  let fixture: ComponentFixture<ServiceProviderBookingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderBookingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
