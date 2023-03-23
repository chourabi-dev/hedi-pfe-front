import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddServicesProvidersComponent } from './admin-add-services-providers.component';

describe('AdminAddServicesProvidersComponent', () => {
  let component: AdminAddServicesProvidersComponent;
  let fixture: ComponentFixture<AdminAddServicesProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddServicesProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddServicesProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
