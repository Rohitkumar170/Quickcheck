import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoemandateComponent } from './demoemandate.component';

describe('DemoemandateComponent', () => {
  let component: DemoemandateComponent;
  let fixture: ComponentFixture<DemoemandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoemandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoemandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
