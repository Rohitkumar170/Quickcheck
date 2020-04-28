import { TestBed } from '@angular/core/testing';

import { OldmandateService } from './oldmandate.service';

describe('OldmandateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OldmandateService = TestBed.get(OldmandateService);
    expect(service).toBeTruthy();
  });
});
