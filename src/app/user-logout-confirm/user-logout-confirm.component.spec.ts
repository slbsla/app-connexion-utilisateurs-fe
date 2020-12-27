import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoutConfirmComponent } from './user-logout-confirm.component';

describe('UserLogoutConfirmComponent', () => {
  let component: UserLogoutConfirmComponent;
  let fixture: ComponentFixture<UserLogoutConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogoutConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogoutConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
