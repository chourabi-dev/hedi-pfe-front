import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripManagementComponent } from './user-trip-management.component';

describe('UserTripManagementComponent', () => {
  let component: UserTripManagementComponent;
  let fixture: ComponentFixture<UserTripManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTripManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTripManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
