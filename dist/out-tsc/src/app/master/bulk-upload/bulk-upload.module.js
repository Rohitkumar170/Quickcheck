import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkUploadComponent } from './bulk-upload.component';
import { BulkUploadRoutingModule } from './bulk-upload-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var BulkUploadModule = /** @class */ (function () {
    function BulkUploadModule() {
    }
    BulkUploadModule = tslib_1.__decorate([
        NgModule({
            declarations: [BulkUploadComponent],
            imports: [
                CommonModule,
                BulkUploadRoutingModule
            ],
            providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], BulkUploadModule);
    return BulkUploadModule;
}());
export { BulkUploadModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=bulk-upload.module.js.map