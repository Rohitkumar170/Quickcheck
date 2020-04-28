import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmrnuploadComponent } from './umrnupload.component';

describe('UmrnuploadComponent', () => {
  let component: UmrnuploadComponent;
  let fixture: ComponentFixture<UmrnuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmrnuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmrnuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
