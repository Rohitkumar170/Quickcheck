import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
import { HistoricalMandateComponent } from './historical-mandate.component';
import { HistoricalmandateRoutingModule } from './historicalmandate-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [HistoricalMandateComponent],
  imports: [
      CommonModule, FormsModule, ReactiveFormsModule,
    HistoricalmandateRoutingModule
    ], providers: [
        AuthGuardService,HistoricalMandateServiceService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class HistoricalmandateModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }
