import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DemoemandateComponent } from './demoemandate.component';
import { CommonModule } from '@angular/common';
import { DemoemandateRoutingModule } from './demoemandate-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var DemoemandateModule = /** @class */ (function () {
    function DemoemandateModule() {
    }
    DemoemandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DemoemandateComponent],
            imports: [
                CommonModule,
                DemoemandateRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], DemoemandateModule);
    return DemoemandateModule;
}());
export { DemoemandateModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=demoemandate.module.js.map