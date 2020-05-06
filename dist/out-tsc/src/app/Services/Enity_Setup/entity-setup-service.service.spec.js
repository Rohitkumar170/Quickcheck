import { TestBed } from '@angular/core/testing';
import { EntitySetupServiceService } from './entity-setup-service.service';
describe('EntitySetupServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EntitySetupServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=entity-setup-service.service.spec.js.map