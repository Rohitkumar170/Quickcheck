import { async, TestBed } from '@angular/core/testing';
import { DownloadoldemandateComponent } from './downloadoldemandate.component';
describe('DownloadoldemandateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DownloadoldemandateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DownloadoldemandateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=downloadoldemandate.component.spec.js.map