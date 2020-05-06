import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DemophysicalComponent } from './demophysical.component';
import { CommonModule } from '@angular/common';
import { DemophysicalRoutingModule } from './demophysical-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var DemophysicalModule = /** @class */ (function () {
    function DemophysicalModule() {
    }
    DemophysicalModule = tslib_1.__decorate([
        NgModule({
            declarations: [DemophysicalComponent],
            imports: [
                CommonModule,
                DemophysicalRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], DemophysicalModule);
    return DemophysicalModule;
}());
export { DemophysicalModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=demophysical.module.js.map