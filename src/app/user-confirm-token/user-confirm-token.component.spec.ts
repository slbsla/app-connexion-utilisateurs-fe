import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmTokenComponent } from './user-confirm-token.component';

describe('UserConfirmTokenComponent', () => {
  let component: UserConfirmTokenComponent;
  let fixture: ComponentFixture<UserConfirmTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfirmTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
