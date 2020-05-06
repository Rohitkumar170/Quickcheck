import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemophysicalComponent } from './demophysical.component';
var routes = [{ path: '', component: DemophysicalComponent }];
var DemophysicalRoutingModule = /** @class */ (function () {
    function DemophysicalRoutingModule() {
    }
    DemophysicalRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DemophysicalRoutingModule);
    return DemophysicalRoutingModule;
}());
export { DemophysicalRoutingModule };
//# sourceMappingURL=demophysical-routing.module.js.map