import { TestBed } from '@angular/core/testing';

import { CorporateSignupService } from './corporate-signup.service';

describe('CorporateSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorporateSignupService = TestBed.get(CorporateSignupService);
    expect(service).toBeTruthy();
  });
});
