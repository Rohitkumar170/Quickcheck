import { async, TestBed } from '@angular/core/testing';
import { DownloadmandateComponent } from './downloadmandate.component';
describe('DownloadmandateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DownloadmandateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DownloadmandateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=downloadmandate.component.spec.js.map