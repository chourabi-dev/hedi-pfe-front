import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookServiceComponent } from './user-book-service.component';

describe('UserBookServiceComponent', () => {
  let component: UserBookServiceComponent;
  let fixture: ComponentFixture<UserBookServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
