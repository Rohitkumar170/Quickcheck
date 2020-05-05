import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
import { EntityBankSetupRoutingModule } from './entity-bank-setup-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var EntityBankSetupModule = /** @class */ (function () {
    function EntityBankSetupModule() {
    }
    EntityBankSetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [EntityBankSetupComponent],
            imports: [
                CommonModule,
                EntityBankSetupRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], EntityBankSetupModule);
    return EntityBankSetupModule;
}());
export { EntityBankSetupModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=entity-bank-setup.module.js.map