import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicesProvidersComponent } from './admin-services-providers.component';

describe('AdminServicesProvidersComponent', () => {
  let component: AdminServicesProvidersComponent;
  let fixture: ComponentFixture<AdminServicesProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminServicesProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServicesProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
