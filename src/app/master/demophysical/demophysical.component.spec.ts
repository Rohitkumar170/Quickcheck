import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemophysicalComponent } from './demophysical.component';

describe('DemophysicalComponent', () => {
  let component: DemophysicalComponent;
  let fixture: ComponentFixture<DemophysicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemophysicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemophysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
