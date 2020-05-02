import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DownloadEmandateComponent } from './download-emandate.component';
var routes = [{ path: '', component: DownloadEmandateComponent }];
var DownloademandateRoutingModule = /** @class */ (function () {
    function DownloademandateRoutingModule() {
    }
    DownloademandateRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], DownloademandateRoutingModule);
    return DownloademandateRoutingModule;
}());
export { DownloademandateRoutingModule };
//# sourceMappingURL=downloademandate-routing.module.js.map