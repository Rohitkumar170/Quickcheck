import { TestBed } from '@angular/core/testing';
import { EntityBankService } from './entity-bank.service';
describe('EntityBankService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EntityBankService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=entity-bank.service.spec.js.map