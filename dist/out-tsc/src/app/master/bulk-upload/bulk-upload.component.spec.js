import { async, TestBed } from '@angular/core/testing';
import { BulkUploadComponent } from './bulk-upload.component';
describe('BulkUploadComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BulkUploadComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BulkUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bulk-upload.component.spec.js.map