import { TestBed } from '@angular/core/testing';

import { BuldEmandateService } from './buld-emandate.service';

describe('BuldEmandateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuldEmandateService = TestBed.get(BuldEmandateService);
    expect(service).toBeTruthy();
  });
});
