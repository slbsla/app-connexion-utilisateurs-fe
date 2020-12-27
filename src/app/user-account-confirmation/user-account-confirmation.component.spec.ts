import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountConfirmationComponent } from './user-account-confirmation.component';

describe('UserAccountConfirmationComponent', () => {
  let component: UserAccountConfirmationComponent;
  let fixture: ComponentFixture<UserAccountConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
