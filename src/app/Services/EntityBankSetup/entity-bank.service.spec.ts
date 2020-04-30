import { TestBed } from '@angular/core/testing';

import { EntityBankService } from './entity-bank.service';

describe('EntityBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityBankService = TestBed.get(EntityBankService);
    expect(service).toBeTruthy();
  });
});
