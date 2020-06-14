import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriverFeedbackComponent } from './view-driver-feedback.component';

describe('ViewDriverFeedbackComponent', () => {
  let component: ViewDriverFeedbackComponent;
  let fixture: ComponentFixture<ViewDriverFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDriverFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDriverFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
