import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersConnexionPopupComponent } from './users-connexion-popup.component';

describe('UsersConnexionPopupComponent', () => {
  let component: UsersConnexionPopupComponent;
  let fixture: ComponentFixture<UsersConnexionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersConnexionPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersConnexionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
