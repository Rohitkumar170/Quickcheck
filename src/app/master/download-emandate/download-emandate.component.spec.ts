import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEmandateComponent } from './download-emandate.component';

describe('DownloadEmandateComponent', () => {
  let component: DownloadEmandateComponent;
  let fixture: ComponentFixture<DownloadEmandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadEmandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEmandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
