import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
var routes = [{ path: '', component: UserComponent }];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map