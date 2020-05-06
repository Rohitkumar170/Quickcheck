import { TestBed } from '@angular/core/testing';
import { LoginServiceService } from './login-service.service';
describe('EmployeeServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoginServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login-service.service.spec.js.map