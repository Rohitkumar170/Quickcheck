import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessRightsComponent } from './access-rights.component';
var routes = [{ path: '', component: AccessRightsComponent }];
var AccessRightsRoutingModule = /** @class */ (function () {
    function AccessRightsRoutingModule() {
    }
    AccessRightsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AccessRightsRoutingModule);
    return AccessRightsRoutingModule;
}());
export { AccessRightsRoutingModule };
//# sourceMappingURL=access-rights-routing.module.js.map