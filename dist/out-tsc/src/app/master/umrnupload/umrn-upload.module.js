import * as tslib_1 from "tslib";
/// <reference path="../../services/umrnupload/umrn-upload.service.ts" />
import { NgModule } from '@angular/core';
import { UmrnuploadComponent } from './umrnupload.component';
import { CommonModule } from '@angular/common';
import { UmrnUploadRoutingModule } from './umrn-upload-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var UmrnUploadModule = /** @class */ (function () {
    function UmrnUploadModule() {
    }
    UmrnUploadModule = tslib_1.__decorate([
        NgModule({
            declarations: [UmrnuploadComponent],
            imports: [
                CommonModule,
                UmrnUploadRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], UmrnUploadModule);
    return UmrnUploadModule;
}());
export { UmrnUploadModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=umrn-upload.module.js.map