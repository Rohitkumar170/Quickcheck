import { async, TestBed } from '@angular/core/testing';
import { DownloadoldmandateComponent } from './downloadoldmandate.component';
describe('DownloadoldmandateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DownloadoldmandateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DownloadoldmandateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=downloadoldmandate.component.spec.js.map