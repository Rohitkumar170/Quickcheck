import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntitySetupComponent } from './entity-setup.component';
var routes = [{ path: '', component: EntitySetupComponent }];
var EntitySetupRoutingModule = /** @class */ (function () {
    function EntitySetupRoutingModule() {
    }
    EntitySetupRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], EntitySetupRoutingModule);
    return EntitySetupRoutingModule;
}());
export { EntitySetupRoutingModule };
//# sourceMappingURL=entity-setup-routing.module.js.map