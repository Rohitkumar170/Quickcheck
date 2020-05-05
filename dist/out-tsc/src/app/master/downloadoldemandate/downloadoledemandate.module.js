import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DownloadoldemandateComponent } from './downloadoldemandate.component';
import { CommonModule } from '@angular/common';
import { DownloadoledemandateRoutingModule } from './downloadoledemandate-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var DownloadoledemandateModule = /** @class */ (function () {
    function DownloadoledemandateModule() {
    }
    DownloadoledemandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DownloadoldemandateComponent],
            imports: [
                CommonModule,
                DownloadoledemandateRoutingModule,
                ReactiveFormsModule,
                FormsModule
            ], providers: [
                AuthGuardService, DownloadoldemandateService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], DownloadoledemandateModule);
    return DownloadoledemandateModule;
}());
export { DownloadoledemandateModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=downloadoledemandate.module.js.map