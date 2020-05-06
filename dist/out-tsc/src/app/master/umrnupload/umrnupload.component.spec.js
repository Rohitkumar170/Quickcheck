import { async, TestBed } from '@angular/core/testing';
import { UmrnuploadComponent } from './umrnupload.component';
describe('UmrnuploadComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UmrnuploadComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UmrnuploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=umrnupload.component.spec.js.map