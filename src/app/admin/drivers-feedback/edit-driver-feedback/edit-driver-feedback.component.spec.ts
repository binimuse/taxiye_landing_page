import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriverFeedbackComponent } from './edit-driver-feedback.component';

describe('EditDriverFeedbackComponent', () => {
  let component: EditDriverFeedbackComponent;
  let fixture: ComponentFixture<EditDriverFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDriverFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriverFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
