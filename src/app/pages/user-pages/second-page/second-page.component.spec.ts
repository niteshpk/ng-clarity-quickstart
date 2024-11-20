import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageComponent } from './second-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from '../../../services/post/post.service';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
