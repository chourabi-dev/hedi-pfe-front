import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAdminListComponent } from './doctors-admin-list.component';

describe('DoctorsAdminListComponent', () => {
  let component: DoctorsAdminListComponent;
  let fixture: ComponentFixture<DoctorsAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
