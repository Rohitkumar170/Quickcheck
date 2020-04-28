import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmrnhistoryComponent } from './umrnhistory.component';

describe('UmrnhistoryComponent', () => {
  let component: UmrnhistoryComponent;
  let fixture: ComponentFixture<UmrnhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmrnhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmrnhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
