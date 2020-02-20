import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { postsComponent } from './posts.component';

describe('postsComponent', () => {
  let component: postsComponent;
  let fixture: ComponentFixture<postsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ postsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(postsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
