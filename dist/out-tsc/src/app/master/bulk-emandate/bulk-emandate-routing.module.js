import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BulkEmandateComponent } from './bulk-emandate.component';
var routes = [{ path: '', component: BulkEmandateComponent }];
var BulkEmandateRoutingModule = /** @class */ (function () {
    function BulkEmandateRoutingModule() {
    }
    BulkEmandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], BulkEmandateRoutingModule);
    return BulkEmandateRoutingModule;
}());
export { BulkEmandateRoutingModule };
//# sourceMappingURL=bulk-emandate-routing.module.js.map