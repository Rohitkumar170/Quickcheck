import { TestBed } from '@angular/core/testing';

import { DownloadmandateService } from './downloadmandate.service';

describe('DownloadmandateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadmandateService = TestBed.get(DownloadmandateService);
    expect(service).toBeTruthy();
  });
});
