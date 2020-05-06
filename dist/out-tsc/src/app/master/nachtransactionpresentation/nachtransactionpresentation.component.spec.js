import { async, TestBed } from '@angular/core/testing';
import { NachtransactionpresentationComponent } from './nachtransactionpresentation.component';
describe('NachtransactionpresentationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NachtransactionpresentationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NachtransactionpresentationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nachtransactionpresentation.component.spec.js.map