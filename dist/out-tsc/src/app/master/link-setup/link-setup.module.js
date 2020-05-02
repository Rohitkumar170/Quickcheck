import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkSetupComponent } from './link-setup.component';
import { LinkSetupRoutingModule } from './link-setup-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var LinkSetupModule = /** @class */ (function () {
    function LinkSetupModule() {
    }
    LinkSetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [LinkSetupComponent],
            imports: [
                CommonModule,
                LinkSetupRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], LinkSetupModule);
    return LinkSetupModule;
}());
export { LinkSetupModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=link-setup.module.js.map