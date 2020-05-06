import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitySetupComponent } from './entity-setup.component';
import { EntitySetupRoutingModule } from './entity-setup-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var EntitySetupModule = /** @class */ (function () {
    function EntitySetupModule() {
    }
    EntitySetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [EntitySetupComponent],
            imports: [
                CommonModule,
                EntitySetupRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], EntitySetupModule);
    return EntitySetupModule;
}());
export { EntitySetupModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=entity-setup.module.js.map