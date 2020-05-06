import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
var routes = [{ path: '', component: EntityBankSetupComponent }];
var EntityBankSetupRoutingModule = /** @class */ (function () {
    function EntityBankSetupRoutingModule() {
    }
    EntityBankSetupRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], EntityBankSetupRoutingModule);
    return EntityBankSetupRoutingModule;
}());
export { EntityBankSetupRoutingModule };
//# sourceMappingURL=entity-bank-setup-routing.module.js.map