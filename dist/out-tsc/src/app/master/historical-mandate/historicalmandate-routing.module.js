import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoricalMandateComponent } from './historical-mandate.component';
var routes = [{ path: '', component: HistoricalMandateComponent }];
var HistoricalmandateRoutingModule = /** @class */ (function () {
    function HistoricalmandateRoutingModule() {
    }
    HistoricalmandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], HistoricalmandateRoutingModule);
    return HistoricalmandateRoutingModule;
}());
export { HistoricalmandateRoutingModule };
//# sourceMappingURL=historicalmandate-routing.module.js.map