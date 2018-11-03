import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDiscussionsComponent } from './general-discussions.component';

describe('GeneralDiscussionsComponent', () => {
  let component: GeneralDiscussionsComponent;
  let fixture: ComponentFixture<GeneralDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDiscussionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
