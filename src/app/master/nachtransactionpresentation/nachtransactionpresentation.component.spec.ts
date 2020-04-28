import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachtransactionpresentationComponent } from './nachtransactionpresentation.component';

describe('NachtransactionpresentationComponent', () => {
  let component: NachtransactionpresentationComponent;
  let fixture: ComponentFixture<NachtransactionpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachtransactionpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachtransactionpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
