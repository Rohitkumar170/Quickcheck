import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DownloadoldmandateComponent } from './downloadoldmandate.component';
var routes = [{ path: '', component: DownloadoldmandateComponent }];
var DownloadoldmandateRoutingModule = /** @class */ (function () {
    function DownloadoldmandateRoutingModule() {
    }
    DownloadoldmandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DownloadoldmandateRoutingModule);
    return DownloadoldmandateRoutingModule;
}());
export { DownloadoldmandateRoutingModule };
//# sourceMappingURL=downloadoldmandate-routing.module.js.map