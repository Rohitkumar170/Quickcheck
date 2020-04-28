import { TestBed } from '@angular/core/testing';

import { AllumrnService } from './allumrn.service';

describe('AllumrnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllumrnService = TestBed.get(AllumrnService);
    expect(service).toBeTruthy();
  });
});
