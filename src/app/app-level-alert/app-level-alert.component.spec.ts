import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLevelAlertComponent } from './app-level-alert.component';

describe('AppLevelAlertComponent', () => {
  let component: AppLevelAlertComponent;
  let fixture: ComponentFixture<AppLevelAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLevelAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLevelAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
