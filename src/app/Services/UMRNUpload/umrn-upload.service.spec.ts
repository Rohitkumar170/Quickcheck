import { TestBed } from '@angular/core/testing';

import { UmrnUploadService } from './umrn-upload.service';

describe('UmrnUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmrnUploadService = TestBed.get(UmrnUploadService);
    expect(service).toBeTruthy();
  });
});
