import { async, TestBed } from '@angular/core/testing';
import { DownloadEmandateComponent } from './download-emandate.component';
describe('DownloadEmandateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DownloadEmandateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DownloadEmandateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=download-emandate.component.spec.js.map