import { TestBed } from '@angular/core/testing';

import { NachtransactionporesentationService } from './nachtransactionporesentation.service';

describe('NachtransactionporesentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NachtransactionporesentationService = TestBed.get(NachtransactionporesentationService);
    expect(service).toBeTruthy();
  });
});
