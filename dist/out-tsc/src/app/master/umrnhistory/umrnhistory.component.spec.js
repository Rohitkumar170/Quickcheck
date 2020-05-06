import { async, TestBed } from '@angular/core/testing';
import { UmrnhistoryComponent } from './umrnhistory.component';
describe('UmrnhistoryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UmrnhistoryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UmrnhistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=umrnhistory.component.spec.js.map