import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_router) {
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('User')) {
            return true;
        }
        this._router.navigate(['']);
        return false;
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map