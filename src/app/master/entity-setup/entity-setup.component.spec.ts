import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySetupComponent } from './entity-setup.component';

describe('EntitySetupComponent', () => {
  let component: EntitySetupComponent;
  let fixture: ComponentFixture<EntitySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
