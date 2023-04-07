import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageTripsComponent } from './admin-manage-trips.component';

describe('AdminManageTripsComponent', () => {
  let component: AdminManageTripsComponent;
  let fixture: ComponentFixture<AdminManageTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
