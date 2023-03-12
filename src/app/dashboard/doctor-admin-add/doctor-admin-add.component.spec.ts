import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAdminAddComponent } from './doctor-admin-add.component';

describe('DoctorAdminAddComponent', () => {
  let component: DoctorAdminAddComponent;
  let fixture: ComponentFixture<DoctorAdminAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAdminAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
