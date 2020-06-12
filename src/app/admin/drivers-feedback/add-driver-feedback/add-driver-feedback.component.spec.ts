import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverFeedbackComponent } from './add-driver-feedback.component';

describe('AddDriverFeedbackComponent', () => {
  let component: AddDriverFeedbackComponent;
  let fixture: ComponentFixture<AddDriverFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDriverFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriverFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
