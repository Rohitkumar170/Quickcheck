import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportViewComponent } from './report-view.component';
var routes = [{ path: '', component: ReportViewComponent }];
var ReportViewRoutingModule = /** @class */ (function () {
    function ReportViewRoutingModule() {
    }
    ReportViewRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ReportViewRoutingModule);
    return ReportViewRoutingModule;
}());
export { ReportViewRoutingModule };
//# sourceMappingURL=report-view-routing.module.js.map