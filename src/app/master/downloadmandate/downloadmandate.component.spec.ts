import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadmandateComponent } from './downloadmandate.component';

describe('DownloadmandateComponent', () => {
  let component: DownloadmandateComponent;
  let fixture: ComponentFixture<DownloadmandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadmandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadmandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
