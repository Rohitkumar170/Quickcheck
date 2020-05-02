import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
import { HistoricalMandateComponent } from './historical-mandate.component';
import { HistoricalmandateRoutingModule } from './historicalmandate-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var HistoricalmandateModule = /** @class */ (function () {
    function HistoricalmandateModule() {
    }
    HistoricalmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [HistoricalMandateComponent],
            imports: [
                CommonModule, FormsModule, ReactiveFormsModule,
                HistoricalmandateRoutingModule
            ], providers: [
                AuthGuardService, HistoricalMandateServiceService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], HistoricalmandateModule);
    return HistoricalmandateModule;
}());
export { HistoricalmandateModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=historicalmandate.module.js.map