import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedUserPanelComponent } from './connected-user-panel.component';

describe('ConnectedUserPanelComponent', () => {
  let component: ConnectedUserPanelComponent;
  let fixture: ComponentFixture<ConnectedUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedUserPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
