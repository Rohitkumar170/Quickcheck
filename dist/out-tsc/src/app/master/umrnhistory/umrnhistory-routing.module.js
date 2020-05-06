import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UmrnhistoryComponent } from './umrnhistory.component';
var routes = [{ path: '', component: UmrnhistoryComponent }];
var UmrnhistoryRoutingModule = /** @class */ (function () {
    function UmrnhistoryRoutingModule() {
    }
    UmrnhistoryRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UmrnhistoryRoutingModule);
    return UmrnhistoryRoutingModule;
}());
export { UmrnhistoryRoutingModule };
//# sourceMappingURL=umrnhistory-routing.module.js.map