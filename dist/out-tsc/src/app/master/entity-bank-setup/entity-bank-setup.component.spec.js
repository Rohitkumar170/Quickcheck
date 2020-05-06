import { async, TestBed } from '@angular/core/testing';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
describe('EntityBankSetupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EntityBankSetupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EntityBankSetupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=entity-bank-setup.component.spec.js.map