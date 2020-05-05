import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcreatemandateComponent } from './ecreatemandate.component';

describe('EcreatemandateComponent', () => {
  let component: EcreatemandateComponent;
  let fixture: ComponentFixture<EcreatemandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcreatemandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcreatemandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
