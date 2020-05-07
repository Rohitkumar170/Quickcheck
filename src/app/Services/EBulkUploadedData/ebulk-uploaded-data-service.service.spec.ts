import { TestBed } from '@angular/core/testing';

import { EbulkUploadedDataServiceService } from './ebulk-uploaded-data-service.service';

describe('EbulkUploadedDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EbulkUploadedDataServiceService = TestBed.get(EbulkUploadedDataServiceService);
    expect(service).toBeTruthy();
  });
});
