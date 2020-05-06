import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkSetupComponent } from './link-setup.component';
var routes = [{ path: '', component: LinkSetupComponent }];
var LinkSetupRoutingModule = /** @class */ (function () {
    function LinkSetupRoutingModule() {
    }
    LinkSetupRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LinkSetupRoutingModule);
    return LinkSetupRoutingModule;
}());
export { LinkSetupRoutingModule };
//# sourceMappingURL=link-setup-routing.module.js.map