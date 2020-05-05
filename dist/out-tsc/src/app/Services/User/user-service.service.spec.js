import { TestBed } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';
describe('UserServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UserServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user-service.service.spec.js.map