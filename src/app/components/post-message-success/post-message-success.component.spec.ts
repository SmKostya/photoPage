import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMessageSuccessComponent } from './post-message-success.component';

describe('PostMessageSuccessComponent', () => {
  let component: PostMessageSuccessComponent;
  let fixture: ComponentFixture<PostMessageSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMessageSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMessageSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
