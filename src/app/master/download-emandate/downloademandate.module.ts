import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadEmandateComponent } from './download-emandate.component';
import { CommonModule } from '@angular/common';
import { DownloademandateRoutingModule } from './downloademandate-routing.module';
import { DownloadEmandateServiceService } from '../../services/downloademandate/download-emandate-service.service';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [DownloadEmandateComponent],
  imports: [
      CommonModule,
      DownloademandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ], providers: [
        AuthGuardService,DownloadEmandateServiceService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
    
})
export class DownloademandateModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }
