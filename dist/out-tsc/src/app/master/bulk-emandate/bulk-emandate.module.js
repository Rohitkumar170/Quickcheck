import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkEmandateComponent } from './bulk-emandate.component';
import { BulkEmandateRoutingModule } from './bulk-emandate-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var BulkEmandateModule = /** @class */ (function () {
    function BulkEmandateModule() {
    }
    BulkEmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [BulkEmandateComponent],
            imports: [
                CommonModule,
                BulkEmandateRoutingModule
            ],
            providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ],
        })
    ], BulkEmandateModule);
    return BulkEmandateModule;
}());
export { BulkEmandateModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=bulk-emandate.module.js.map