import { TestBed } from '@angular/core/testing';

import { SuperDriverService } from './super-driver.service';

describe('SuperDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperDriverService = TestBed.get(SuperDriverService);
    expect(service).toBeTruthy();
  });
});
