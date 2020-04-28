import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadoldmandateComponent } from './downloadoldmandate.component';

describe('DownloadoldmandateComponent', () => {
  let component: DownloadoldmandateComponent;
  let fixture: ComponentFixture<DownloadoldmandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadoldmandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadoldmandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
