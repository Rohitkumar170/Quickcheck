import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NachtransactionpresentationComponent } from './nachtransactionpresentation.component';
var routes = [{ path: '', component: NachtransactionpresentationComponent }];
var NachtransactionpresentationRoutingModule = /** @class */ (function () {
    function NachtransactionpresentationRoutingModule() {
    }
    NachtransactionpresentationRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], NachtransactionpresentationRoutingModule);
    return NachtransactionpresentationRoutingModule;
}());
export { NachtransactionpresentationRoutingModule };
//# sourceMappingURL=nachtransactionpresentation-routing.module.js.map