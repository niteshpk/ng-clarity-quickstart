import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopAllocationFormPageComponent } from './laptop-allocation-form-page.component';

describe('LaptopAllocationFormPageComponent', () => {
  let component: LaptopAllocationFormPageComponent;
  let fixture: ComponentFixture<LaptopAllocationFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopAllocationFormPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaptopAllocationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
