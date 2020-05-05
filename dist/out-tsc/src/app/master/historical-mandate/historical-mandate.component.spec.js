import { async, TestBed } from '@angular/core/testing';
import { HistoricalMandateComponent } from './historical-mandate.component';
describe('HistoricalMandateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HistoricalMandateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HistoricalMandateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=historical-mandate.component.spec.js.map