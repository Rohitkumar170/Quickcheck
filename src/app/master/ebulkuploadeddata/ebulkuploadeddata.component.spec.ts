import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbulkuploadeddataComponent } from './ebulkuploadeddata.component';

describe('EbulkuploadeddataComponent', () => {
  let component: EbulkuploadeddataComponent;
  let fixture: ComponentFixture<EbulkuploadeddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbulkuploadeddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbulkuploadeddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
