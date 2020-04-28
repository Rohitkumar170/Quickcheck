import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityBankSetupComponent } from './entity-bank-setup.component';

describe('EntityBankSetupComponent', () => {
  let component: EntityBankSetupComponent;
  let fixture: ComponentFixture<EntityBankSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityBankSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityBankSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
