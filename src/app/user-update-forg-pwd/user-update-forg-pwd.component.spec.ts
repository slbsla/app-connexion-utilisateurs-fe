import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateForgPwdComponent } from './user-update-forg-pwd.component';

describe('UserUpdateForgPwdComponent', () => {
  let component: UserUpdateForgPwdComponent;
  let fixture: ComponentFixture<UserUpdateForgPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateForgPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateForgPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
