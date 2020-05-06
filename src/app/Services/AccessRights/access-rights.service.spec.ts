import { TestBed } from '@angular/core/testing';

import { AccessRightsService } from './access-rights.service';

describe('AccessRightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessRightsService = TestBed.get(AccessRightsService);
    expect(service).toBeTruthy();
  });
});
