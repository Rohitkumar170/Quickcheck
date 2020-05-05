import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewComponent } from './report-view.component';
import { ReportViewRoutingModule } from './report-view-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var ReportViewModule = /** @class */ (function () {
    function ReportViewModule() {
    }
    ReportViewModule = tslib_1.__decorate([
        NgModule({
            declarations: [ReportViewComponent],
            imports: [
                CommonModule,
                ReportViewRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], ReportViewModule);
    return ReportViewModule;
}());
export { ReportViewModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=report-view.module.js.map