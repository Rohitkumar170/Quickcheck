import { TestBed } from '@angular/core/testing';

import { EntitySetupServiceService } from './entity-setup-service.service';

describe('EntitySetupServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntitySetupServiceService = TestBed.get(EntitySetupServiceService);
    expect(service).toBeTruthy();
  });
});
