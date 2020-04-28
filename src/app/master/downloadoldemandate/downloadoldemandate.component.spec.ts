import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadoldemandateComponent } from './downloadoldemandate.component';

describe('DownloadoldemandateComponent', () => {
  let component: DownloadoldemandateComponent;
  let fixture: ComponentFixture<DownloadoldemandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadoldemandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadoldemandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
