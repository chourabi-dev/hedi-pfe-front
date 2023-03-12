import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAdminAddComponent } from './categories-admin-add.component';

describe('CategoriesAdminAddComponent', () => {
  let component: CategoriesAdminAddComponent;
  let fixture: ComponentFixture<CategoriesAdminAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesAdminAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
