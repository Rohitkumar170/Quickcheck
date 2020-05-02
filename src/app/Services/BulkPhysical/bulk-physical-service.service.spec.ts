import { TestBed } from '@angular/core/testing';

import { BulkPhysicalServiceService } from './bulk-physical-service.service';

describe('BulkPhysicalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulkPhysicalServiceService = TestBed.get(BulkPhysicalServiceService);
    expect(service).toBeTruthy();
  });
});
