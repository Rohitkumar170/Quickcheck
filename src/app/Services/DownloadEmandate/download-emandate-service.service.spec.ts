import { TestBed } from '@angular/core/testing';
import { DownloadEmandateServiceService } from './download-emandate-service.service';
describe('DownloadEmandateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadEmandateServiceService = TestBed.get(DownloadEmandateServiceService);
    expect(service).toBeTruthy();
  });
});
