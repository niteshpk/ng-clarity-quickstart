import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPagesComponent } from './blank-pages.component';

describe('BlankPagesComponent', () => {
  let component: BlankPagesComponent;
  let fixture: ComponentFixture<BlankPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlankPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
