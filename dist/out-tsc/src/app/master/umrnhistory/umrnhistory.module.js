import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UmrnhistoryComponent } from './umrnhistory.component';
import { CommonModule } from '@angular/common';
import { UmrnhistoryRoutingModule } from './umrnhistory-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var UmrnhistoryModule = /** @class */ (function () {
    function UmrnhistoryModule() {
    }
    UmrnhistoryModule = tslib_1.__decorate([
        NgModule({
            declarations: [UmrnhistoryComponent],
            imports: [
                CommonModule,
                UmrnhistoryRoutingModule, FormsModule, ReactiveFormsModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], UmrnhistoryModule);
    return UmrnhistoryModule;
}());
export { UmrnhistoryModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=umrnhistory.module.js.map