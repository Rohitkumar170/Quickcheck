import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DownloadmandateComponent } from './downloadmandate.component';
var routes = [{ path: '', component: DownloadmandateComponent }];
var DownloadmandateRoutingModule = /** @class */ (function () {
    function DownloadmandateRoutingModule() {
    }
    DownloadmandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DownloadmandateRoutingModule);
    return DownloadmandateRoutingModule;
}());
export { DownloadmandateRoutingModule };
//# sourceMappingURL=downloadmandate-routing.module.js.map