import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagesComponent } from './user-pages.component';

describe('UserPagesComponent', () => {
  let component: UserPagesComponent;
  let fixture: ComponentFixture<UserPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
