import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NachMandateComponent } from './nach-mandate.component';
var routes = [{ path: '', component: NachMandateComponent }];
var NachmandateRoutingModule = /** @class */ (function () {
    function NachmandateRoutingModule() {
    }
    NachmandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], NachmandateRoutingModule);
    return NachmandateRoutingModule;
}());
export { NachmandateRoutingModule };
//# sourceMappingURL=nachmandate-routing.module.js.map