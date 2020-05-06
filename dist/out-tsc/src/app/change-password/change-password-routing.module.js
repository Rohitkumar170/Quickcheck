import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password.component';
var routes = [
    { path: '', component: ChangePasswordComponent }
];
var ChangePasswordRoutingModule = /** @class */ (function () {
    function ChangePasswordRoutingModule() {
    }
    ChangePasswordRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ChangePasswordRoutingModule);
    return ChangePasswordRoutingModule;
}());
export { ChangePasswordRoutingModule };
//# sourceMappingURL=change-password-routing.module.js.map