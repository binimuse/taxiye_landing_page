import { TestBed } from '@angular/core/testing';

import { DriveFeedbackService } from './drive-feedback.service';

describe('DriveFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriveFeedbackService = TestBed.get(DriveFeedbackService);
    expect(service).toBeTruthy();
  });
});
