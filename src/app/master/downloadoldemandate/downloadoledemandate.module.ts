import { NgModule } from '@angular/core';
import { DownloadoldemandateComponent } from './downloadoldemandate.component';
import { CommonModule } from '@angular/common';
import { DownloadoledemandateRoutingModule } from './downloadoledemandate-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [DownloadoldemandateComponent],
  imports: [
      CommonModule,
      DownloadoledemandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ], providers: [
        AuthGuardService,DownloadoldemandateService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class DownloadoledemandateModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }

