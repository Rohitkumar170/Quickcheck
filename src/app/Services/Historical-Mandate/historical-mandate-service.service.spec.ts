import { TestBed } from '@angular/core/testing';

import { HistoricalMandateServiceService } from './historical-mandate-service.service';

describe('HistoricalMandateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoricalMandateServiceService = TestBed.get(HistoricalMandateServiceService);
    expect(service).toBeTruthy();
  });
});
