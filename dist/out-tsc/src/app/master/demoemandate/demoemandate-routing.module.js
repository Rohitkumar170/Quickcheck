import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoemandateComponent } from './demoemandate.component';
var routes = [{ path: '', component: DemoemandateComponent }];
var DemoemandateRoutingModule = /** @class */ (function () {
    function DemoemandateRoutingModule() {
    }
    DemoemandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DemoemandateRoutingModule);
    return DemoemandateRoutingModule;
}());
export { DemoemandateRoutingModule };
//# sourceMappingURL=demoemandate-routing.module.js.map