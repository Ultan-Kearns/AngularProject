import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumHistoryComponent } from './forum-history.component';

describe('ForumHistoryComponent', () => {
  let component: ForumHistoryComponent;
  let fixture: ComponentFixture<ForumHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
