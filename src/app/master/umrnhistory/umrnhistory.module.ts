import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UmrnhistoryComponent } from './umrnhistory.component';
import { CommonModule } from '@angular/common';
import { UmrnhistoryRoutingModule } from './umrnhistory-routing.module';
import { UMRNHISTORYSERVICEService } from '../../services/umrn_history/umrn-history-service.service';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [UmrnhistoryComponent],
  imports: [
      CommonModule,
      UmrnhistoryRoutingModule, FormsModule, ReactiveFormsModule
    ], providers: [
      AuthGuardService,
        { provide: 'BASE_URL', useFactory: getBaseUrl }
  ]
})
export class UmrnhistoryModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}
