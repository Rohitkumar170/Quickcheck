import { TestBed } from '@angular/core/testing';

import { UMRNHISTORYSERVICEService } from './umrn-history-service.service';

describe('UMRNHISTORYSERVICEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UMRNHISTORYSERVICEService = TestBed.get(UMRNHISTORYSERVICEService);
    expect(service).toBeTruthy();
  });
});
