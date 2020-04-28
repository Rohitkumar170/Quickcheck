import { TestBed } from '@angular/core/testing';
import { DownloadoldemandateService } from './downloadoldemandate.service';
describe('DownloadoldemandateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => {
    const service: DownloadoldemandateService = TestBed.get(DownloadoldemandateService);
    expect(service).toBeTruthy();
  });
});
