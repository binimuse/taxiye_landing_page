import { TestBed } from '@angular/core/testing';

import { AuteServiceService } from './aute-service.service';

describe('AuteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuteServiceService = TestBed.get(AuteServiceService);
    expect(service).toBeTruthy();
  });
});
