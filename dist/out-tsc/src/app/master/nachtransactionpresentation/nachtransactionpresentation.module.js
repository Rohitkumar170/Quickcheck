import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NachtransactionpresentationComponent } from './nachtransactionpresentation.component';
import { CommonModule } from '@angular/common';
import { NachtransactionpresentationRoutingModule } from './nachtransactionpresentation-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var NachtransactionpresentationModule = /** @class */ (function () {
    function NachtransactionpresentationModule() {
    }
    NachtransactionpresentationModule = tslib_1.__decorate([
        NgModule({
            declarations: [NachtransactionpresentationComponent],
            imports: [
                CommonModule,
                NachtransactionpresentationRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], NachtransactionpresentationModule);
    return NachtransactionpresentationModule;
}());
export { NachtransactionpresentationModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=nachtransactionpresentation.module.js.map